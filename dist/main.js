(()=>{"use strict";class e{static#e(e){if("string"!=typeof e||e.length<2||e.length>10)throw new Error("invalid character name")}static#t={Bowman:"25/25",Swordsman:"40/10",Magician:"10/40",Daemon:"10/40",Undead:"25/25",Zombie:"40/10"};static#s(e){if(!Object.keys(this.#t).includes(e)||"string"!=typeof e)throw console.log(e),new Error("invalid character type "+e)}static#c(e){const t=this.#t[e].split("/");this.attack=t[0],this.defence=t[1]}constructor(t,s){e.#e(t),this.name=t,e.#s(s),this.type=s,this.health=100,this.level=1,e.#c(s),this.attack=+this.constructor.attack,this.defence=+this.constructor.defence}levelUp(){if(0===this.health)throw new Error("нельзя повысить левел умершего");this.level++,this.attack*=1.2,this.defence*=1.2,this.health=100}damage(e){0!==this.health&&(this.health-=e*(1-this.defence/100))}}class t extends e{constructor(e,t="Bowman"){super(e,t)}}console.log(t),console.log(new t("owerman")),console.log(new class extends e{constructor(e,t="Daemon"){super(e,t)}}("daemon")),console.log(new class extends e{constructor(e,t="Magician"){super(e,t)}}("magician")),console.log(new class extends e{constructor(e,t="Swordsman"){super(e,t)}}("swordsman")),console.log(new class extends e{constructor(e,t="Zombie"){super(e,t)}}("zombie")),console.log(new class extends e{constructor(e,t="Undead"){super(e,t)}}("undead"))})();