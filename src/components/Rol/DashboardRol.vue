<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div> 
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" style="font-weight: bold;">Dashboard Rol</a>
        </div>
      </nav>
    </div>
    <div class="container-fluit text-center">
      <div class="row">
        <div id="menu" class="col-2">
          <div class="container">
            <div class="row">
              <h4>Opciones</h4>
            </div>
            <div class="row">
              <router-link :to="{ path: '/GetRol' }" type="button" class="btn btn-outline-secondary">Ver Usuarios</router-link>
            </div>
            <div class="row">
              <!-- <router-link :to="{name:'/get'}" type="button" class="btn btn-outline-secondary">Insert</router-link> -->
              <router-link :to="{ path: '/PostRol' }" type="button" class="btn btn-outline-secondary">Insertar  </router-link>
            </div>
            <!-- <div class="row">
              <router-link :to="{ path: '/put' }" type="button" class="btn btn-outline-secondary">Update</router-link>
            </div> -->
          </div>
        </div>

        <div id="procesos" class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
button {
  margin: 10px;
}

#procesos {

  margin-right: 25px;
  padding: 3px 10px;
  border-radius: 20px;
}

#menu {
  margin: 5px;
  border-radius: 20px;
}

.row {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>