<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista Puestos</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>  
                <th style="font-weight: bold;">Acciones</th>       
              </tr>
            </thead> 
            <tbody>
              <tr v-for="pues in Puestos" :key="pues.pkpuesto">
                <td>{{ pues.pkpuesto }}</td>
                <td>{{ pues.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarCliente(pues.pkpuesto)" class="btn btn-outline-danger">
                      Eliminar</button>          
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
  
        </div>
  
  
      </div>
    </div>
  </template>
   
  <script>
  import axios from "axios";
  
  
  export default {
  name:'GetPues',
    components:{
  
    },
    data() {
      return {
        Puestos: {},
        Empleado: [],
        nombresempleados: [{}],
        smg: "",
      };
    },
    created: function () {
      this.consultarcliente();
    },
    methods: {
      consultarcliente() {
        axios.get("https://localhost:7051/Puesto").then((result) => {
          console.log(result.data);
          this.Puestos = result.data.result;
  
  
         });
  
  
      },
  
      borrarCliente(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Puesto?id=" + id);
          window.location.href = "GetPues";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/PutPues";
  
      
  
      },
    },
  
  };
  </script>