<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Factura</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="razonsocial">razonsocial:</label>
                                <input type="text" class="form-control" name="razonsocial" aria-describedby="helpId"
                                    id="razonsocial" placeholder="usuario" v-model="Facturas.razonsocial" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
                            </div>
                        </div>
                        <div class="col">
                            <br>
                            <div class="row"><input type="date" id="start" name="trip-start" v-model="Fecha" class="date"></div>
                            
                        </div>                      

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="rfc">rfc:</label>
                                <input type="text" class="form-control" name="rfc" id="rfc" aria-describedby="helpId"
                                    placeholder="rfc" v-model="Facturas.rfc" />
                            </div>
                        </div>
                        <div class="col">
                             
                            <div class="form-group">
                                <label for="fkCliente">fkCliente:</label>
                                <input type="fkCliente" class="form-control" name="fkCliente" id="fkCliente" aria-describedby="helpId"
                                    placeholder="fkCliente" v-model="Facturas.fkCliente" />
                            </div> 
                
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'GetFac' }"
                                class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'GetFac' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "PostFac",
    components: {

    },

    data() {
        return {
            Facturas: {},
            smg: "",
            nombrecliente: "",
            Clientes: [],
            Fecha:"",
            registroCli: [],
        };
    },
    created: function () {
        this.cargarClientes();
    },
    methods: {
        formulario() {

            var cuerpo = {
                razonsocial: this.Facturas.razonsocial,
                fecha: this.Fecha,
                rfc: this.Facturas.rfc,
                fkCliente: document.getElementById('fkCliente').value,
            };

            axios.post('https://localhost:7051/Factura', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "Agregado exitosamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        },
        cargarClientes() {
            axios.get('https://localhost:7051/Cliente').then((response => {
                this.Clientes = response.data.result;
                console.log(response.data.result);
            }))
        },
        convertidorcli() {
            axios.get('https://localhost:7051/Empleado/Get_Em=' + this.nombrecliente).then((response) => {
                this.registroCli = response.data.result;

                document.getElementById('fkCliente').value = this.registroCli[0].pkCliente;
            })
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
}

.date{
    border-radius: 20px;
   border-color: rgb(232, 235, 238);
   vertical-align:middle;
}
</style>