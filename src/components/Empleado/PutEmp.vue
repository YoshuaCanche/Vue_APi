<template>
  <div class="container-fluid">
      <div class="card">
          <div class="card-header">Actualizar Empleado</div>
          <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
          <div class="card-body">
              <form v-on:submit.prevent="formulario">
                  <div class="row">
                      <div class="col">
                          <div class="form-group">
                              <label for="user">ID:</label>
                              <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                  id="pkUsuario" placeholder="ID" v-model="pkUsuario" />
                              <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                  actualizar</small>
                              <br>
                              <br>
                              <div id="botonbusca">
                                  <button type="button" class="btn btn-outline-primary"
                                      v-on:click="Buscar(pkUsuario)">Buscar</button>
                                  &#160
                                  <router-link :to="{ name: 'GetFac' }" class="btn btn-outline-danger">Cancelar</router-link>
                              </div>
                          </div>
                      </div>
                      <div id="user-password" style="display: none;">
                          <div class="col">

                              <div class="form-group">
                                  <label for="user">Razon Social:</label>
                                  <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                      placeholder=" " value="" />



                              </div>
                          </div>
                          <div class="col">
                              <div class="form-group">
                                  <label for="password">fecha:</label>
                                  <input type="text" class="form-control" name="password" id="password"
                                      aria-describedby="helpId" placeholder=" " value="" />

                              </div>
                          </div>
                          <div class="col">
                              <div class="form-group">
                                  <label for="rfc">Rfc:</label>
                                  <input type="text" class="form-control" name="rfc" id="rfc"
                                      aria-describedby="helpId" placeholder="rfc" value="" />

                              </div>
                          </div>
                      </div>

                  </div>
                  <br>
                  <div id="fk-empleado-rol" class="row" style="display: none;">
                      <div class="col">

                          <div class="form-group">
                              <label for="fkEmpleado">Cliente:</label>
                              <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                  aria-describedby="helpId" placeholder=" " value="" />
                          </div>
                      </div>
                      
                  </div>
                  <br>
                  <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'GetEmp'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                  <div id="botones" class="row" style="display: none;">
                      <div class="btn-group" role="group">
                          |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                          |<router-link :to="{ name: 'GetEmp' }" class="btn btn-outline-danger">Cancelar</router-link>|
                      </div>

                  </div>
                  <br>
                  <div class="row">
                      <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                          {{ smg }}
                      </div>
                      <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PutEmp',
  components: {

  },

  data() {
      return {
          pkEmpleado: "",
          smg: "",
          pkEmpleado: 0,
          bad: "",
      };
  },
  methods: {
      formulario() {
     
          var cuerpo = {
              pkEmpleado: this.pkEmpleado,
              razonsocial: document.getElementById('user').value,
              fecha: document.getElementById('password').value,
              rfc: document.getElementById('rfc').value,
              cliente: document.getElementById('fkEmpleado').value,
             


          };
          axios.put('https://localhost:7051/Empleado?id=' + this.pkUsuario, cuerpo).then((resutl) => {
              console.log(resutl.data);
              document.getElementById('botones').style.display = "none";
              document.getElementById("alert").style.display = "block";
              this.smg = "Registro actualizado ";
              document.getElementById('botoncerrar').style.display="block";
          })
      },
      Buscar(id) {
          if (id > 0) {
              axios.get('https://localhost:7051/Empleado/' + id).then((response) => {

                  this.Usuarios = response.data.result
                  if (this.Usuarios == null) {
                      document.getElementById('alert2').style.display = "block";
                      this.bad = "No Existe   registro de ese ID"
                      
                  } else {
                      console.log(response.data.result)
                      document.getElementById('botonbusca').style.display = "none";
                      document.getElementById('peticion').style.display = "none";
                      document.getElementById('user-password', 'fk-empleado-rol').style.display = "block";
                      document.getElementById('fk-empleado-rol').style.display = "block";
                      document.getElementById('botones').style.display = "block";
                      document.getElementById('alert2').style.display = "none";


                      document.getElementById('user').value = this.Departamento.razonsocial;
                      document.getElementById('password').value = this.Departamento.fecha;
                      document.getElementById('rfc').value=this.Departamento.rfc
                      document.getElementById('fkEmpleado').value = this.Departamento.cliente;
                      

                  }
              })
          } else {
              document.getElementById('alert2').style.display = "block";
              this.bad = "No hay valor de ID"
          }


      }

  },

}

</script>