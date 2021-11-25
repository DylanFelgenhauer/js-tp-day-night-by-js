/*
-----------------------------------------------------------------------------------------------------------------

    EXERCICE ETAPE PAR ETAPE DE "SIMPLIFICATION"
 -----------------------------------------------------------------------------------------------------------------
*/

 /*const DayNight = {
     init(){
         const eBody = document.querySelector("body");
         const eTumbler = document.querySelector(".tumbler");
         const aPosts = document.querySelectorAll(".post");
         document.documentElement.classList.add('js-enabled');
         function fNightMode(event) {
             eBody.classList.toggle("body--night-mode");
             eTumbler.classList.toggle("tumbler--night-mode");
             for (const ePost of aPosts) {
                 ePost.classList.toggle("post--night-mode");
             }
             console.log(event);
         }
         document.querySelector(".tumbler__wrapper").addEventListener('click',fNightMode);
     }
 }
 DayNight.init();*/

/*
this permet de declarer un objet dans (ici) le "dayNight"*/


/*const DayNight = {
    init(){
         this.eBody = document.querySelector("body");
         this.eTumbler = document.querySelector(".tumbler");
         this.aPosts = document.querySelectorAll(".post");
        document.documentElement.classList.add('js-enabled');

        document.querySelector(".tumbler__wrapper").addEventListener('click',(event)=>{
            this.eBody.classList.toggle("body--night-mode");
            this.eTumbler.classList.toggle("tumbler--night-mode");
            for (const ePost of this.aPosts) {
                ePost.classList.toggle("post--night-mode");
            }
            console.log(event);
        });
    }
}
DayNight.init();*/

(function(){
    const DayNight = {
        init(){
            this.eBody = document.querySelector("body");
            this.eTumbler = document.querySelector(".tumbler");
            this.aPosts = document.querySelectorAll(".post");
            document.documentElement.classList.add('js-enabled');

            document.querySelector(".tumbler__wrapper").addEventListener('click',(event)=>{
                this.eBody.classList.toggle("body--night-mode");
                this.eTumbler.classList.toggle("tumbler--night-mode");
                for (const ePost of this.aPosts) {
                    ePost.classList.toggle("post--night-mode");
                }
                console.log(event);
            });
        }
    }
    DayNight.init();
})();
