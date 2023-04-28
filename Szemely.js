class Szemely {
  #szulnev;
  constructor(nev, szul_datum, SZULOELEM) {
    this.nev = nev;
    this.szul_datum = szul_datum;
    this.#szulnev = nev;
    SZULOELEM.append(`
    <div class="szemely"> <h3>${this.nev}</h3><p>${this.kor()}</p></div>
    `);
    this.SZEMELYELEM = $(".szemely:last-child");
    //console.log(this.SZEMELYELEM);
   // console.log(this);
    this.SZEMELYELEM.on("click",  () => {
      console.log(this.nev);
    });
   
  }
  
  getSzulnev() {
    return this.#szulnev;
  }

  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let aktualKor = year - this.szul_datum;
    return aktualKor;
  }
}
export default Szemely;
