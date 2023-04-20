<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Empleado</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="user">Nombre:</label>
                                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                    placeholder="" v-model="Empleado.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="password">Apellidos:</label>
                                <input type="text" class="form-control" name="password" id="password"
                                    aria-describedby="helpId" placeholder=" " v-model="Empleado.apellidos" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkEmpleado">Direccion:</label>
                                <input type="text" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder=" " v-model="Empleado.direccion" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">Ciudad:</label>
                                <input type="text" class="form-control" name="fkRol" id="precio" aria-describedby="helpId"
                                    placeholder=" " v-model="Empleado.ciudad" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">Puesto:</label>
                                <input type="number" class="form-control" name="fkpuesto" id="precio"
                                    aria-describedby="helpId" placeholder=" " v-model="Empleado.fkPuesto" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">Departamento:</label>
                                <input type="number" class="form-control" name="fkdepartamento" id="precio"
                                    aria-describedby="helpId" placeholder=" " v-model="Empleado.fkDepartamento" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'GetEmp' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'GetEmp' }" class="btn btn-outline-primary" id="finaliza"
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
    name: "PutEmp",
    components: {

    },

    data() {
        return {
            Empleado: {},
            smg: " ",
        };
    },
    methods: {
        formulario() {

            var cuerpo = {
                nombre: this.Empleado.nombre,
                apellidos: this.Empleado.apellidos,
                direccion: this.Empleado.direccion,
                ciudad: this.Empleado.ciudad,
                fkPuesto: this.Empleado.fkPuesto,
                fkDepartamento: this.Empleado.fkDepartamento,

            };

            axios.post('https://localhost:7051/Empleado/', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "Se agrego Correctamente";
                    document.getElementById('finaliza').style.display = "block";
              
                }
                // window.location.href = "dashboard";

            })
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>