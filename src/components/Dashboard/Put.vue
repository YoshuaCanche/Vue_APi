<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Usuario</div>
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
                                    <router-link :to="{ name: 'GetC' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-password" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="user">user:</label>
                                    <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                        placeholder="usuario" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="text" class="form-control" name="password" id="password"
                                        aria-describedby="helpId" placeholder="password" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkEmpleado">fkEmpleado:</label>
                                <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder="fkEmpleado" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">fkRol:</label>
                                <input type="number" class="form-control" name="fkRol" id="fkRol" aria-describedby="helpId"
                                    placeholder="fkRol" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'GetC'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'GetC' }" class="btn btn-outline-danger">Cancelar</router-link>|
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
    name: 'Put',
    components: {

    },

    data() {
        return {
            Usuarios: "",
            smg: "",
            pkUsuario: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                pkUsuario: this.pkUsuario,
                user: document.getElementById('user').value,
                password: document.getElementById('password').value,
                fechaRegistro: hoy.toISOString(),
                fkEmpleado: document.getElementById('fkEmpleado').value,
                fkRol: document.getElementById('fkRol').value,


            };
            axios.put('https://localhost:7051/Usuario?id=' + this.pkUsuario, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById('botones').style.display = "none";
                document.getElementById("alert").style.display = "block";
                this.smg = "Registro actualizado ";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7051/Usuario/' + id).then((response) => {

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


                        document.getElementById('user').value = this.Usuarios.user;
                        document.getElementById('password').value = this.Usuarios.password;
                        document.getElementById('fkEmpleado').value = this.Usuarios.fkEmpleado;
                        document.getElementById('fkRol').value = this.Usuarios.fkRol;

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