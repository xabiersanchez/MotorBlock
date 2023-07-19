import { Injectable } from '@angular/core';
import { BlockchainVehiculos } from '../../assets/blockchain/blockchain';
import blockchaindata from '../../assets/blockchain/blockchaindatos.json';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchaindataList:{Nombre:string}[] = blockchaindata;
  public instanciaBlockchain = new BlockchainVehiculos();

  constructor() { 
    //this.instanciaBlockchain.minarTransaccionesPendientes();
    //this.instanciaBlockchain.leerBlockchain();
    console.log(this.blockchaindataList);
    this.blockchaindataList = [{Nombre: "a"}, {Nombre: "e"}];
    console.log(this.blockchaindataList);
  }

  obtenerBloques(){
    return this.instanciaBlockchain.blockchain;
  }

  anyadirTransaccion(tx:any){
    this.instanciaBlockchain.crearTransaccion(tx);
  }

  obtenerTransaccionesPendientes(){
    return this.instanciaBlockchain.transaccionesPendientes;
  }

  obtenerTransaccionesVehiculo(matricula:any){
    return this.instanciaBlockchain.buscarMatricula(matricula);
  }

  minarTransaccionesPendientes(){
    this.instanciaBlockchain.minarTransaccionesPendientes();
  }

  obtenerDatos(){
    this.instanciaBlockchain.leerBlockchain();
  }
}
