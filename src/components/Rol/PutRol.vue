<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Rol</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">ID:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkCliente" placeholder="ID" v-model="pkRol" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkRol)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'GetRol' }"
                                        class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-apellidos" style="display: none;">
                            <div class="row">

                                <div class="form-group">
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                        id="nombre" placeholder="nombre" value="" />
                                </div>
                            </div>
                        </div>


                        <div id="botoncerrar" style="display: none;">
                            <br>
                            |<router-link :to="{ name: 'GetRol' }" type="button"
                                class="btn btn-outline-primary">Finalizar</router-link>|
                            
                        </div>

                        <div id="botones" class="row" style="display: none;">
                            <br>

                            <div class="btn-group" role="group">
                                |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                                |<router-link :to="{ name: 'GetRol' }"
                                    class="btn btn-outline-danger">Cancelar</router-link>|
                            </div>

                        </div>
                        <br>
                        <div class="row">
                            <br>
                            <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                                {{ smg }}
                            </div>
                            <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'GetRol',
    components: {

    },

    data() {
        return {
            GetRol:" ",
            smg: "",
            pkRol: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                
                nombre: document.getElementById('nombre').value
            };
            axios.put('https://localhost:7051/Rol?id=' + this.pkRol, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                document.getElementById('botones').style.display = "none";
                this.smg = "Registro actualizado";
                document.getElementById('botoncerrar').style.display = "block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7051/Rol/' + id).then((response) => {

                    this.Roles = response.data.result
                    console.log(this.Roles)
                    if (this.Roles == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-apellidos').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Roles.nombre;
                        console.log(this.Roles[0].nombre);
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
