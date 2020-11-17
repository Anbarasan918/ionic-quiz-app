import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizdatashareService {

selecteduser;
 correctAnswer;
 wrongAnswer;
  quiz1=[
    {id:1,question:"what is 5+5",useranswer:"",answer:"10",options:[5,15,10,20]}, 
    {id:2,question:"what is 15+15",useranswer:"",answer:"30",options:[35,30,25,40]},
    {id:3,question:"what is 55+35",useranswer:"",answer:"90",options:[60,90,80,70]},
    {id:4,question:"what is 35+25",useranswer:"",answer:"60",options:[50,60,70,55]},
    {id:5,question:"what is 5+15",useranswer:"",answer:"20",options:[10,20,15,25]}
  ]
  
   quiz2=[
    {id:1,question:"An electrical appliance has a resistance of 25 Ω. When this electrical appliance is connected to a 230 V supply line, the current passing through it will be:",useranswer:"",answer:"2.9 A",options:["0.92 A","2.9 A","9.2 A"," 92 A"]},
    {id:2,question:"When a current 'I' flows through a resistance 'R' for time 't' the electrical energy spent is given by",useranswer:"",answer:"I2Rt ",options:["IRt"," I2Rt","IR2t","I2R/t"]},
    {id:3,question:"Two electric bulbs have resistances in the ratio 1:2. If they are joined in series, the energy consumed in them is in the ratio.",useranswer:"",answer:"1:2",options:["2:1","1:2","4:1","1:1"]},
    {id:4,question:"If the current flowing through a fixed resistor is halved, the heat produced in it will become:",useranswer:"",answer:"One-half ",options:["One-fourth","One-half","Double","Four times"]},
    {id:5,question:"Which of the ammeters would you prefer for doing an experiment to determine the equivalent resistance of two resistances most accurately, when connected in parallel?",useranswer:"",answer:"Ammeter A with least count 0.25 A ",options:["Ammeter A with least count 0.25 A","Ammeter B with least count 0.5 A","Ammeter C with least count 0.05 A"," Ammeter D with least count 0.1 A"]}
  ]
  quiz3=[
    {id:1,question:" Every food chain in the ecosystem begins with………. which are the original source of food.",useranswer:"",answer:"Saprophytes",options:["Saprophytes","Parasites","Producers","Herbivores"]},
    {id:2,question:"We should reduce the use of the plastic bags, bottles etc. because",useranswer:"",answer:"They are not durable",options:["They are not durable","They are non-biodegradable"," They are made of toxic materials","They react with the atmospheric gases"]},
    {id:3,question:"In a food chain the second trophic level is occupied by:",useranswer:"",answer:"Carnivores",options:["Carnivores","Autotrophs","Herbivores","Producers"]},
    {id:4,question:" Which among the following is a correct full form for DDT?",useranswer:"",answer:"Dichlorodiphenyltrichloroethane",options:["Dichlorodiphenyltrichloroethane","Dichlorodiphenyltetrachloroethane","Dichlorodecaphenyltrichloroethane","Dichlorodiethyltrichloroethane"]},
    {id:5,question:" Global warming is a phenomenon related to:",useranswer:"",answer:"Evaporation",options:["Evaporation","Ecological balance"," Greenhouse effect","Desertification"]}
  ]
  
  
  
  constructor() { }
}
