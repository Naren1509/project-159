AFRAME.registerComponent("comics-poster",{
    init:function(){
        this.nailContainer = this.el;
        this.posters() 
    },
    posters:function(){
        const postersRef = [
            {
                id:"batman",
                title:"batman",
                url:"./comic/batman.jpg"
            },
            {
                id:"captain",
                title:"captain america",
                url:"./comic/captain.jpg"
            },
            {
                id:"invincible",
                title:"invincible",
                url:"./comic/invincible.jpg"
            },
            {
                id:"pokemon",
                title:"pokemon",
                url:"./comic/pokemon.jpg"
            }
        ]
        let previousXPos = -25;
        for(var item of postersRef){
            const posX = previousXPos + 10;
            const posY = 10;
            const posZ = 0;
            const position = {x:posX,y:posY,z:posZ}
            previousXPos = posX;

            const BorderEl = this.createBorder(position,item.id);
            const ThumbNail = this.createThumbnail(item);
            BorderEl.appendChild(ThumbNail);
            const TitleEl = this.createTitleEl(position,item);
            BorderEl.appendChild(TitleEl);
            this.nailContainer.appendChild(BorderEl);   
        }
    },

    createBorder:function(position,id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:9,
            height:10,
        });
        entityEl.setAttribute("position",position);
        entityEl.setAttribute("material",{
          color:"#0077CC",
          opacity:0.5,
        });
        entityEl.setAttribute("cursor-listener",{
        });
        return entityEl;
    },

    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
          primitive:"plane",
          width:8.5,
          height:9.5
        });
        entityEl.setAttribute("position",{x:0,y:0,z:0.1});
        entityEl.setAttribute("material",{
          src:item.url,
        });
        return entityEl;
    },
    
    createTitleEl:function(position,item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text",{
          font:"exo2bold",
          align:"center",
          width:22,
          color:"#452c63",
          value:item.title,
        });
        const Elposition = position;
        Elposition.x = -2;
        entityEl.setAttribute("position",{x:0,y:-7.5,z:0});
        entityEl.setAttribute("visible",true);
        return entityEl;
    },
})