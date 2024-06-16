AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
      state:{type:"string",default:"comics-list"},
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleClickEvents();
    },
    update:function(){
      const fadeBackgroundEl = document.querySelector("#FadeBackground");
      c = fadeBackgroundEl.children;
      if(c.length > 0){
        var i;
        for(i=0; i<=c.length; c++){
          fadeBackgroundEl.removeChild(c[i]);
        }
      }else{
        this.handleClickEvents();
      }
    },

    handleClickEvents:function(){
      this.el.addEventListener("click",evt=>{
        const placesContainer = document.querySelector("#nail-container");
        const {state} = placesContainer.getAttribute("comics-poster");
        if(state === "comics-list"){
          const id = this.el.getAttribute("id");
          const comicsId = [
            "batman",
            "captain",
            "invincible",
            "pokemon"
          ];
          if(placesId.includes(id)){
            placesContainer.setAttribute("comics-poster",{
              state:"view",
              selectedCard:id
            });
          }
        }
      });
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const posterId = ["batman", "captain", "invincible", "pokemon"];
      if (posterId.includes(id)) {
        const posterContainer = document.querySelector("#nail-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#008000",
        });
      }
    },

    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },

    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId} = this.data;
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if(id == selectedItemId){
            el.setAttribute("material",{
              color:"#0077CC",
              opacity:1,
            });
          } 
        }
      });
    },
  });