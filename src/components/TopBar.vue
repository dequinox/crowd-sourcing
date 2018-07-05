<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item selected">
                      <a class="nav-link" href="#">Обработка Заявок<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Проекты</a>
                  </li>
              </ul>
              <button type="button" class="btn align-middle"><b>{{ userFirstName }}</b></button>
          </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userFirstName : "D",
                userLastname : "Umarov"
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
        border-radius: 50%;
        background-color: #38B09D;
        color: white;
        height: 30px;
        width: 30px;
        padding: 5px;
    }
    li {
        margin: 10px;
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
