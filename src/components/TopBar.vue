<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item selected rounded">
                      <a class="nav-link" href="#">Обработка Заявок<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Проекты</a>
                  </li>
              </ul>
              <span class="user align-middle rounded-circle font-weight-bold">{{ user }}</span>
          </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userFirstName : "Doro",
                userLastname : "Umarov"
            }
        },

        computed: {
            user: function(){
                return this.userFirstName[0] + this.userLastname[0]
            }
        }
    }
</script>

<style scoped>
    .navbar {
        height: 60px;
        -webkit-box-shadow: 0 6px 4px -1px #ddd;
        -moz-box-shadow: 0 6px 4px -1px #ddd;
        box-shadow: 0 6px 4px -1px #ddd;
    }
    .user {
        background-color: #38B09D;
        color: white;
        padding: 7px;
    }
    li {
        margin: 15px;
    }
    .selected {
        background-color: #38B09D;
    }
    .nav-item .nav-link {
        color: #38B09D;
    }
    .selected .nav-link {
        color: white;
    }
    .nav-link {
        font-weight: bold;
        padding: 5px;
    }
</style>
