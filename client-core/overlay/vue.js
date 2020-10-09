const { ipcRenderer } = require("electron");

var menu = new Vue({
    el: "#menu",
    data: {
      items: [],
      mana: 0,
      shield: 0,
    },
    methods: {
        doStuff: function(attack){
            ipcRenderer.send("attack", attack);
        }
    },
    created: function (){
      ipcRenderer.send("updateMenu");

        ipcRenderer.on('updateAttacks', (event, arg) => {
             console.log("i ran1")

            this.items = arg;
          }),
          ipcRenderer.on('updateMana', (event, arg) => {
            console.log("i ran2")

            this.mana = arg;
          }),
          ipcRenderer.on('updateShield', (event, arg) => {
            console.log("i ran3")

            this.shield = arg;
          }),
          console.log("i ran")

    }
  });