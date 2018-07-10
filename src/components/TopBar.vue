<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item selected col-8">
                      <a class="nav-link" href="#"><b>Обработка Заявок</b><span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Проекты</a>
                  </li>
              </ul>
              <div class="user rounded-circle align-middle"><span>{{user}}</span></div>
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
    button {
        padding: auto;
    }
    .user b {
        line-height: 40px;
    }
    .user {
        background-color: #38B09D;
        color: white;
        height: 40px;
        width: 40px;
        margin: 15px;
    }
    .user span {
        line-height: 40px;
    }
    li {
        margin: 15px;
    }
    .nav-item {
        padding: 3px;
        border-radius: 20px;
    }
    a {
        color: #38B09D;
    }
    .selected .nav-link {
        color: #38B09D;
    }
    .nav-link {
        padding: 5px;
    }
</style>
