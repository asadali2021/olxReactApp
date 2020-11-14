import React from 'react';
class NavCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  // toggleDiv = () =>
  toggleDiv() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
  render() {
    return (
      <div className="zerotop">
        <div className="nav-content">
          <ul className="navi">
            <li className="marg"><h5 id="down"><b>All Categories</b></h5><select onClick={this.toggleDiv} id="move"></select></li>
            <li className="marg over" id="mob">Mobile Phones</li>
            <li className="marg over">Cars</li>
            <li className="marg over">Motorcycles</li>
            <li className="marg over">TV-Video-Audio</li>
            <li className="marg over">Tablets</li>
            <li className="marg over">Land & Plots</li>
          </ul>
          {this.state.show && <Box />}
        </div>
      </div>
        );
  }
}
class Box extends React.Component {
  state = {
    cat: "All Categories",
    veh: "Vehicles",
    tract: "Tractors & Trailors",
    boats: "Boats",
    ov: "Other Vehicles",
    rick: "Rickshaw & Chingchi",
    bus: "Buses, Vans & Trucks",
    spare: "Spare Parts",
    carAcc: "Cars Accessories",
    carInstallment: "Cars on Installments",
    wash: "Washing Machines & Dryers",
    Freeze: "Fridges and Freezers",
    Ac: "AC & Coolers",
    kitc: "Kitchen Appliances",
    gen: "Generators, UPS & Power Solutions",
    OtHom: "Other Home Appliances",
    Ge: "Games & Entertaintment",
    Cam: "Cameras & Accessories",
    comp: "Computers & Accessories",
    property: "Property for Sale",
    Floor: "Portions & Floors",
    Shops: "Shops-Offices-Commercial Space",
    Appart: "Appartments & Flats",
    Houses: "Houses",
    phones: "Mobile Phones",
    access: "Accessories",
    cars: "Cars",
    bikes: "Motorcycles",
    tv: "TV-Video-Audio",
    tab: "Tablets",
    plot: "Land & Plots"
  }
  furniture = {
    An: "Animals",
    OAn: "Other Animals",
    pfa: "Pet Food & Accessories",
    Hor: "Horses",
    Ls: "Livestock",
    Dgs: "Dogs",
    Cts: "Cats",
    Ha: "Hens & Aseel",
    Birds: "Birds",
    Fia: "Fish & Aquariums",
    fhd: "Furniture & Home Decor",
    ohi: "Other Household Items",
    of: "Office Furniture",
    cb: "Curtains & Blinds",
    runc: "Rugs & Carpets",
    pnm: "Painting & Mirrors",
    go: "Garden & Outdoor",
    tnd: "Tables & Dinning",
    Hdeco: "Home Decoration",
    Bw: "Beds & Wardrobes",
    Snc: "Sofa & Chairs",
    bina: "Business, Industrial & Agriculture",
    mp: "Medical & Pharma",
    obi: "Other Business & Industry",
    A: "Agriculture",
    chm: "Construction & Heavy Machinery",
    tni: "Trade & Industrial",
    fnr: "Food & Resturants",
    bfs: "Business for Sale",
    B: "Bikes",
    Scutr: "Scooters",
    AQ: "ATV & Quads",
    Byc: "Bicycles",
    SP: "Spare Parts",
    Mot: "Motorcycles"
  }
  fas = {
    fb: "Fashion & Beauty",
    of: "Other Fashion",
    cou: "Couture",
    LnP: "Lawn & Pret",
    Wdg: "Wedding",
    Watc: "Watches",
    Sk: "Skin & Hair",
    Mu: "Make Up",
    J: "Jewellery",
    Ftw: "Footwear",
    Clot: "Clothes",
  }
  property = {
    pr: "Property for Rent",
    Vrent: "Vacation Rentals-Guest Houses",
    R: "Roommates & Paying Guest",
    Room: "Rooms",
    PnF: "Portions & Floors",
  }
  jobs = {
    Jobs: "Jobs",
    oj: "Other Jobs",
    pt: "Part-Time",
    Dstaff: "Domestic Staff",
    Med: "Medical",
    Manufact: "Manufacturing",
    Afin: "Accounting & Finance",
    HRes: "Human Resources",
    CnA: "Clerical & Administration",
    Ht: "Hotels & Tourism",
    Itn: "IT & Networking",
    Sales: "Sales",
    CServ: "Coustomer Service",
    Educ: "Education",
    AdvP: "Advertising & PR",
    Mark: "Marketing",
    O: "Online"
  }
  serve = {
    Ser: "Services",
    fff: "Farm & Fresh Food",
    CnR: "Catering & Resturant",
    Hnor: "Home & Office Repair",
    MP: "Movers & Packers",
    MnDh: "Maids & Domestic Help",
    HB: "Health & Beauty",
    ES: "Event Services",
    EnCr: "Electronics & Computer Repair",
    OtServ: "Other Services",
    WD: "Web Development",
    DTax: "Drivers & Taxi",
    CarR: "Car Rental",
    TnV: "Travel & Visa",
    EnClass: "Education & Classes"
  }
  Sport = {
    Bsnh: "Books, Sports & Hobbies",
    ohob: "Other Hobbies",
    Gnf: "Gym & Fitness",
    Sequip: "Sports Equipments",
    Mi: "Musical Instruments",
    BnM: "Books & Magazines"
  }
  kid = {
    kids: "Kids",
    Ka: "Kids Accessories",
    Kb: "Kids Bikes",
    SnS: "Swings & Slides",
    PW: "Prams & Walkers",
    t: "Toys",
    Kf: "Kids Furniture"
  }

  render() {

    return (
      <div className="app-content">
        <div className="main-cat" id="HideShow">
          <div className="Col1-content">
            <div>
              <ul className="nextlist">
                <li><h4><b>{this.state.veh}</b></h4></li>
                <li>{this.state.tract}</li>
                <li>{this.state.boats}</li>
                <li>{this.state.ov}</li>
                <li>{this.state.rick}</li>
                <li>{this.state.bus}</li>
                <li>{this.state.spare}</li>
                <li>{this.state.carAcc}</li>
                <li>{this.state.carInstallment}</li>
                <li>{this.state.cars}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist1">
                <li><h4><b>Mobiles</b></h4></li>
                <li> {this.state.phones} </li>
                <li> {this.state.access} </li>
                <li> {this.state.tab} </li>
              </ul>
            </div>
            <div>
              <ul className="nextlist2">
                <li><h4><b>Electronics & <br /> Home Appliances</b></h4></li>
                <li> {this.state.wash} </li>
                <li> {this.state.Freeze} </li>
                <li> {this.state.Ac} </li>
                <li>{this.state.kitc}</li>
                <li>{this.state.gen}</li>
                <li>{this.state.OtHom}</li>
                <li>{this.state.Ge}</li>
                <li>{this.state.Cam}</li>
                <li>{this.state.tv}</li>
                <li>{this.state.comp}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist3">
                <li><h4><b>{this.state.property}</b></h4></li>
                <li>{this.state.Floor}</li>
                <li>{this.state.Shops}</li>
                <li>{this.state.Appart}</li>
                <li>{this.state.Houses}</li>
                <li>{this.state.plot}</li>
              </ul>
            </div>
          </div>
          <div className="Col2-content">
            <div>
              <ul className="nextlist4">
                <li><li><h4><b>{this.furniture.An}</b></h4></li></li>
                <li>{this.furniture.OAn}</li>
                <li>{this.furniture.pfa}</li>
                <li>{this.furniture.Hor}</li>
                <li>{this.furniture.Ls}</li>
                <li>{this.furniture.Dgs}</li>
                <li>{this.furniture.Cts}</li>
                <li>{this.furniture.Ha}</li>
                <li>{this.furniture.Birds}</li>
                <li>{this.furniture.Fia}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist5">
                <li><li><h4><b>Furniture & <br /> Home Decor</b></h4></li></li>
                <li>{this.furniture.of}</li>
                <li>{this.furniture.cb}</li>
                <li>{this.furniture.runc}</li>
                <li>{this.furniture.pnm}</li>
                <li>{this.furniture.go}</li>
                <li>{this.furniture.tnd}</li>
                <li>{this.furniture.Hdeco}</li>
                <li>{this.furniture.Bw}</li>
                <li>{this.furniture.Snc}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist6">
                <li><h4><b>Business, Industrial & <br/> Agriculture</b></h4></li>
                <li>{this.furniture.mp}</li>
                <li>{this.furniture.obi}</li>
                <li>{this.furniture.A}</li>
                <li>{this.furniture.chm}</li>
                <li>{this.furniture.tni}</li>
                <li>{this.furniture.fnr}</li>
                <li>{this.furniture.bfs}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist7">
                <li><h4><b>{this.furniture.B}</b></h4></li>
                <li>{this.furniture.Scutr}</li>
                <li>{this.furniture.AQ}</li>
                <li>{this.furniture.Byc}</li>
                <li>{this.furniture.SP}</li>
                <li>{this.furniture.Mot}</li>
              </ul>
            </div>
          </div>
          <div className="Col3-content">
            <div>
              <ul className="nextlist8">
                <li><h4><b>{this.fas.fb}</b></h4></li>
                <li>{this.fas.of}</li>
                <li>{this.fas.cou}</li>
                <li>{this.fas.LnP}</li>
                <li>{this.fas.Wdg}</li>
                <li>{this.fas.Watc}</li>
                <li>{this.fas.Sk}</li>
                <li>{this.fas.Mu}</li>
                <li>{this.fas.J}</li>
                <li>{this.fas.Ftw}</li>
                <li>{this.fas.Clot}</li>
                <li>{this.state.access}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist9">
                <li><h4><b>{this.property.pr}</b></h4></li>
                <li>{this.state.plot}</li>
                <li>{this.property.Vrent}</li>
                <li>{this.property.R}</li>
                <li>{this.property.Room}</li>
                <li>{this.state.Shops}</li>
                <li>{this.property.PnF}</li>
                <li>{this.state.Appart}</li>
                <li>{this.state.Houses}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist10">
                <li><h4><b>{this.jobs.Jobs}</b></h4></li>
                <li>{this.jobs.oj}</li>
                <li>{this.jobs.pt}</li>
                <li>{this.jobs.Dstaff}</li>
                <li>{this.jobs.Med}</li>
                <li>{this.jobs.Manufact}</li>
                <li>{this.jobs.Afin}</li>
                <li>{this.jobs.HRes}</li>
                <li>{this.jobs.CnA}</li>
                <li>{this.jobs.Ht}</li>
                <li>{this.jobs.Itn}</li>
                <li>{this.jobs.Sales}</li>
                <li>{this.jobs.CServ}</li>
                <li>{this.jobs.Educ}</li>
                <li>{this.jobs.AdvP}</li>
                <li>{this.jobs.Mark}</li>
                <li>{this.jobs.O}</li>
              </ul>
            </div>
          </div>
          <div className="Col4-content">
            <div>
              <ul className="nextlist11">
                <li><h4><b>{this.serve.Ser}</b></h4></li>
                <li>{this.serve.fff}</li>
                <li>{this.serve.CnR}</li>
                <li>{this.serve.Hnor}</li>
                <li>{this.serve.MP}</li>
                <li>{this.serve.MnDh}</li>
                <li>{this.serve.HB}</li>
                <li>{this.serve.ES}</li>
                <li>{this.serve.EnCr}</li>
                <li>{this.serve.OtServ}</li>
                <li>{this.serve.WD}</li>
                <li>{this.serve.DTax}</li>
                <li>{this.serve.CarR}</li>
                <li>{this.serve.TnV}</li>
                <li>{this.serve.EnClass}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist12">
                <li><h4><b>Books, Sports & <br /> Hobbies</b></h4></li>
                <li>{this.Sport.ohob}</li>
                <li>{this.Sport.Gnf}</li>
                <li>{this.Sport.Sequip}</li>
                <li>{this.Sport.Mi}</li>
                <li>{this.Sport.BnM}</li>
              </ul>
            </div>
            <div>
              <ul className="nextlist13">
                <li><h4><b>{this.kid.kids}</b></h4></li>
                <li>{this.kid.Ka}</li>
                <li>{this.kid.Kb}</li>
                <li>{this.kid.SnS}</li>
                <li>{this.kid.PW}</li>
                <li>{this.kid.t}</li>
                <li>{this.kid.Kf}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default NavCat;
