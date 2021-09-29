import { Component, OnInit } from '@angular/core';
import { BackedService } from '../backed.service';
import _ from "lodash";

@Component({
  selector: 'app-auto-expression',
  templateUrl: './auto-expression.component.html',
})
export class AutoExpressionComponent implements OnInit {
  selectedItem = '';
  functionInput = '';
  operatorInput = '';

  functionItems = [];
  operatorItems = [];
  mdrmItems = [];
  hintItems = [];
  hintType = "Function";
  orignalHintItems = [];

  currentSearch: any;
  
  activeExpression = {};
  activeExpressionString = "";
  activeParamCount = 0;
  activeMaxParamCount = 0;

  parentExpression = [];

  snapshots = [{
    hintType:"Function",
    string:""
  }];
  snapshotString = "";
  undo = [{
    hintType:"Function",
    string:""
  }];

  snapshotTemplate = {
      hintType:"Function",
      string:""
  }

  templateExpression = {
    is_var_arg:"",
    "1stParam":[],
    operandName:"",
    operandType:"",
    operand_desc:null,
    operand_syntax:null,
    operand_usage:null,
    paramCount:0,
    processType:"",
    returnType:"" 
}

  constructor(private backend: BackedService) {}

  ngOnInit(): void {
    this.functionItems = this.backend.data.filter(
      (item) => item['operandType'] === 'Function'
    );
    this.operatorItems = this.backend.data.filter(
      (item) => item['operandType'] !== 'Function'
    );
    this.backend.MDRM.forEach((mdrm)=>{
      this.mdrmItems.push({
        operandName:mdrm,
        operandType:"Attribute",
      })
    })
  }

  filterHints(input){
    if(this.hintType!=="int"){
      this.hintItems = this.hintItems.filter((hint)=>hint["operandName"].toLowerCase().includes(input.toLowerCase()));
    }
    if(this.hintItems.length === 1 && this.hintItems[0]["operandName"] !== ")"){
      this.onSelectedItem(this.hintItems[0]);
    }
  }

  handleInput(event){
    console.log(event, this.hintType);

    // for inputs those requires only INTEGER
    if(this.hintType === "int"){
      let inputValue = this.selectedItem.split('').pop();
      if(!("0123456789)".includes(inputValue)) && event.key !== "Backspace"){
        this.selectedItem=this.selectedItem.slice(0,-1);
      }
      if(inputValue === ")"){
        this.selectedItem=this.selectedItem.slice(0,-1);
        this.onSelectedItem(this.hintItems[0]);
        // this.handleHintTypeChange("Operator")
        // this.takeSnapshot();
        // this.updateHintList();
      }
    }

    // ctrl + z undo event
    if(event.key === "z" && event.ctrlKey){
      this.snapshots.push(this.undo.pop());
      if(this.undo.length === 0){
        this.undo.push({
          hintType:"Function",
          string:""
        });
      }
      this.selectedItem = this.snapshots[this.snapshots.length-1]["string"];
      this.snapshotString = this.snapshots[this.snapshots.length-1]["string"];
      this.hintType= this.snapshots[this.snapshots.length-1]["hintType"];
      this.updateHintList();
    }

    // handle backspace event
    if(this.snapshotString.length > this.selectedItem.length && this.selectedItem.length > 0){
      this.undo.push(this.snapshots.pop());
      // console.log(this.snapshots);
      this.selectedItem = this.snapshots[this.snapshots.length-1]["string"];
      this.snapshotString = this.snapshots[this.snapshots.length-1]["string"];
      this.hintType= this.snapshots[this.snapshots.length-1]["hintType"];
      this.updateHintList();
    }

    if(event.key === "Backspace"){
      this.hintItems= _.cloneDeep(this.orignalHintItems);
    }
    this.filterHints(this.selectedItem.split(" ").pop());
    // this.handleArrow(event);
  }

  takeSnapshot(){
    this.snapshotString = _.cloneDeep(this.selectedItem);
    this.snapshots.push({
      string:this.snapshotString,
      hintType:_.cloneDeep(this.hintType)
    })
  }

  onSelectedItem(selectedObject) {
    // console.log(selectedObject);
    if(selectedObject["operandType"]==="Function"){
      this.handleFunction(selectedObject);
    }
    if(selectedObject["operandType"]!=="Function" && !(selectedObject["operandType"]==="Attribute" || selectedObject["operandType"] === "closingBracket")){
      this.handleOperator(selectedObject);
    }
    if(selectedObject["operandType"]==="Attribute"){
      this.handleAttribute(selectedObject);
    }
    if(selectedObject["operandType"]==="closingBracket"){
      this.handleHintTypeChange("Operator")
      this.selectedItem = `${this.selectedItem.trimEnd()}) `
    }

    this.parentExpression.push(selectedObject);
    this.updateHintList();
    this.takeSnapshot();
  }

  handleHintTypeChange(keyword){
    console.log(keyword);
    switch(keyword){
      case "String" : this.hintType = "Attribute";break;
      case "int" : this.hintType = "int";break;
      case "Operator" : this.hintType = "Operator";break;
      case "Boolean" : this.hintType = "Function";break;
      default : this.hintType = "No Hint";break;
    }
  }

  updateHintList(){
    if(this.hintType === "Function"){
      this.hintItems = _.cloneDeep(this.functionItems);
    }
    if(this.hintType === "Operator"){
      this.hintItems = _.cloneDeep(this.operatorItems);
    }
    if(this.hintType === "Attribute"){
      this.hintItems = _.cloneDeep(this.mdrmItems);
    }
    if(this.hintType === "int"){
      this.hintItems = [{ operandName:")", operandType:"closingBracket" }];
    }
    if(this.hintType === "No Hint"){
      this.hintItems = [];
    }
    this.orignalHintItems = _.cloneDeep(this.hintItems);
  }

  handleFunction(selectedObject){
    this.selectedItem = `${this.snapshotString.trimEnd()} ${selectedObject['operandName'].trimStart()}( `;
    this.activeExpression = selectedObject;
    this.activeMaxParamCount = selectedObject["1stParam"].length;
    this.activeParamCount=0;
    this.handleHintTypeChange(selectedObject["1stParam"][this.activeParamCount]);
    this.activeParamCount+=1;
  }
  handleOperator(selectedObject){
    this.selectedItem = `${this.snapshotString.trimEnd()} ${selectedObject['operandName'].trimStart()} `;
    this.activeExpression = selectedObject;
    this.handleHintTypeChange("Boolean");
  }
  handleAttribute(selectedObject){
    this.selectedItem = `${this.snapshotString.trimEnd()} ${selectedObject['operandName'].trimStart()} `;
    if(this.activeParamCount < this.activeMaxParamCount){
      this.selectedItem = `${this.selectedItem.trimEnd()}, `
      this.activeParamCount+=1;
      if(this.activeParamCount < this.activeMaxParamCount){
        this.handleHintTypeChange(selectedObject["1stParam"][this.activeParamCount]);
      }
    }else{
      this.selectedItem = `${this.selectedItem.trimEnd()}) `
      this.handleHintTypeChange("Operator");
    }
  }
}
