import { Component, OnInit } from '@angular/core';
import { Voitures } from '../model/voitures';
import { VoituresService } from '../services/voitures.service'
@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
voitures:Voitures[] | undefined;
  constructor() { 
    this.voitures = [
      {Matricule : 120 , marqueVoiture : "KIA", prixVoiture : 3000.600, dateCreation: new Date("01/14/2011"),Modele:"noveau"},
      {Matricule : 120 , marqueVoiture : "BMW", prixVoiture : 2000000.600, dateCreation: new Date("01/14/2011"),Modele:"noveau"},
      {Matricule : 120 , marqueVoiture : "Mercedes", prixVoiture : 4000000.600, dateCreation: new Date("01/14/2011"),Modele:"noveau"},
      {Matricule : 120 , marqueVoiture : "Rang", prixVoiture : 15000000.600, dateCreation: new Date("01/14/2011"),Modele:"ancien"},
    ];
  }

  ngOnInit(): void {
  }

}
