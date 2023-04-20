<template>
  <div>
    <div class="card">
      <div class="card-header"><strong>Lista de Usuarios</strong></div>

      <div class="card_body">
       
        <table class="table">
          
          <thead>
            <tr>
              <th style="font-weight: bold;">Id</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Apellidos</th>
              <th style="font-weight: bold;">Direccion</th>
              <th style="font-weight: bold;">Ciudad</th>
              <th style="font-weight: bold;">Fkpuesto</th>
              <th style="font-weight: bold;">Fkdepartamento</th>
              <th style="font-weight: bold;">Acciones</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="empleos in Empleado" :key="empleos.pkEmpleado">
              <td>{{ empleos.pkEmpleado }}</td>
              <td>{{ empleos.nombre }}</td>
              <td>{{ empleos.apellidos }}</td>
              <td>{{ empleos.direccion }}</td>
              <td>{{ empleos.ciudad }}</td>
              <td>{{ empleos.puesto.nombre }}</td>
              <td>{{ empleos.departamento.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="borrarUsuario(empleos.pkEmpleado)" class="btn btn-outline-danger">
                    Eliminar</button>  
                    <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>          
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

  components:{

  },
  data() {
    return {
      Empleado: {},
      smg: "",
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7051/Empleado/Get_Em").then((result) => {
        console.log(result.data);
        this.Empleado = result.data.result;



       });


    },

    borrarUsuario(id) {
      var pregunta=window.confirm('Esta se seguro de eliminar este registro?');

      if(pregunta===true){
        axios.delete('https://localhost:7051/Empleado?id=' + id);
        
        window.location.href = "GetEmp";
        
      }else{
        
      }  

    },
    editaregistro() {
    window.location.href="/PutEmp";

    

    },
  },

};
</script>
