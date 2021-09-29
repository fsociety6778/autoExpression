import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackedService {

  data=[
    {
      is_var_arg:"N",
      "1stParam":['String', 'String'],
      operandName:"ascii_check",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:2,
      processType:"Edit Check",
      returnType:"Boolean"
    },
    {
      is_var_arg:"N",
      "1stParam":['int'],
      operandName:"column_max",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Decimal"
    },
    {
      is_var_arg:"N",
      "1stParam":['String'],
      operandName:"column_sum",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Decimal"
    },
    {
      is_var_arg:"N",
      "1stParam":['String', 'String'],
      operandName:"compare_records",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:2,
      processType:"Edit Check",
      returnType:"Boolean"
    },
    {
      is_var_arg:"Y",
      "1stParam":['String'],
      operandName:"concat",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:"concat(Column1, Column2, ........ColumnN)",
      operand_usage:"concat(XXXX, YYYYY)",
      paramCount:1,
      processType:"Edit Check",
      returnType:"String"
    },
    {
      is_var_arg:"N",
      "1stParam":['double'],
      operandName:"contains",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Boolean"
    },
    {
      is_var_arg:"N",
      "1stParam":['String'],
      operandName:"count",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Numeric"
    },
    {
      is_var_arg:"N",
      "1stParam":['String'],
      operandName:"current_date_compare",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Boolean"
    },
    {
      is_var_arg:"N",
      "1stParam":['int'],
      operandName:"date_compare",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Boolean"
    },
    {
      is_var_arg:"N",
      "1stParam":['int'],
      operandName:"date_diff_days",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Numeric"
    },
    {
      is_var_arg:"N",
      "1stParam":['String'],
      operandName:"date_format",
      operandType:"Function",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:1,
      processType:"Edit Check",
      returnType:"Date"
    },

    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"!=",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },

    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"AND",
      operandType:"Logical_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"eq",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"ge",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"gt",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"Le",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"Lt",
      operandType:"Comparission_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
    {
      is_var_arg:null,
      "1stParam":[],
      operandName:"OR",
      operandType:"Logical_Op",
      operand_desc:null,
      operand_syntax:null,
      operand_usage:null,
      paramCount:0,
      processType:"Edit Check",
      returnType:null
    },
  ]

  MDRM=[
    "TSCI1000",
    "JZQY1050",
    "KPIP1100",
    "DJYJ1150",
    "JBED1200",
    "RSTV1250",
    "QOVG1300",
    "CLYE1350",
    "GPVF1400",
    "XLSK1450",
    "LRQM1500",
    "WQGU1550",
    "YZRQ1600",
    "JMGR1650",
    "UBYB1700",
    "LFIQ1750",
    "FLGT1800",
    "VUKF1850",
    "MXHB1900",
    "RQJD1950",
    "GXDR2000",
    "BJUL2050",
    "OZHV2100",
    "KCER2150",
    "OPSX2200",
    "FPUD2250",
    "SVMN2300",
    "XIDG2350",
    "GJMT2400",
    "QISH2450",
    "EMUR2500",
    "ZIUX2550",
    "PRBP2600",
    "IDRU2650",
    "SJFP2700",
    "LEDR2750",
    "CJBP2800",
    "OUJJ2850",
    "GBTC2900",
    "LLDC2950",
    "ODDF3000",
    "CGPD3050",
    "LZPB3100",
    "TZFH3150",
    "RTVG3200",
    "JTMZ3250",
    "PDMF3300",
    "JULG3350",
    "QSTZ3400",
    "ECXG3450",
    "DOYU3500",
    "EGVQ3550",
    "VZFB3600",
    "EKGV3650",
    "GLLT3700",
    "MLDB3750",
    "PPZV3800",
    "OTNJ3850",
    "BDLL3900",
    "FOFK3950",
    "LSHO4000",
    "BFKJ4050",
    "EVYJ4100",
    "KYFY4150",
    "QSRR4200",
    "BBLI4250",
    "TOQM4300",
    "CSEM4350",
    "UIWL4400",
    "YVQN4450",
    "XXJQ4500",
    "JTYW4550",
    "ZLGL4600",
    "ESHH4650",
    "KWHW4700",
    "NEBR4750",
    "WCFJ4800",
    "THBP4850",
    "YFGB4900",
    "ZUNS4950",
    "XMLR5000",
    "TIEX5050",
    "IIJX5100",
    "PRXN5150",
    "RBUI5200",
    "FLKR5250",
    "ETKP5300",
    "MGCL5350",
    "THOP5400",
    "HYNX5450",
    "QBOB5500",
    "NLJR5550",
    "EUVQ5600",
    "EVUD5650",
    "NMLN5700",
    "WKOR5750",
    "MEEQ5800",
    "VJPR5850",
    "UXTU5900",
    "XIML5950",
    "WPQC6000",
    "GOEQ6050",
    "XIFM6100",
    "PHOC6150",
    "GCGC6200",
    "CNPP6250",
    "KGYM6300",
    "QBMH6350",
    "MUKX6400",
    "CIZH6450",
    "ROJE6500",
    "JSXL6550",
    "YKCG6600",
    "WVOL6650",
    "VTEM6700",
    "HTFM6750",
    "PCKH6800",
    "TYNU6850",
    "OKZP6900",
    "NGQB6950",
    "SOSM7000",
    "LVQI7050",
    "KXGV7100",
    "WXUU7150",
    "ONWL7200",
    "QMER7250",
    "QVQL7300",
    "LUMS7350",
    "EQHK7400",
    "HTCD7450",
    "QTQZ7500",
    "CGWW7550",
    "IOHL7600",
    "GGTV7650",
    "XDJN7700",
    "DUNU7750",
    "LPJB7800",
    "UNHS7850",
    "DILU7900",
    "RLIQ7950",
    "DLXR8000",
    "ESKD8050",
    "XVKN8100",
    "QHOX8150",
    "LEDY8200",
    "MBMM8250",
    "BJDJ8300",
    "GVCD8350",
    "QIRP8400",
    "DDLZ8450",
    "WCIY8500",
    "WVBV8550",
    "RXYM8600",
    "WQGB8650",
    "EEGG8700",
    "DDJX8750",
    "FVVN8800",
    "BXMN8850",
    "YHJY8900",
    "FVED8950",
    "ZFMN9000",
    "CLCU9050",
    "XHHF9100",
    "FSHH9150",
    "OJFV9200",
    "BFIS9250",
    "WOZB9300",
    "NOFC9350",
    "KOLF9400",
    "DCWE9450",
    "UETR9500",
    "KFYV9550",
    "KFTQ9600",
    "FUOV9650",
    "OOCI9700",
    "OJOC9750",
    "LVEI9800",
    "IMHY9850",
    "VMXC9900",
    "NWUH9950"
  ]
  constructor() { }
}
