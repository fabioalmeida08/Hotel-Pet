import { Header } from "./stylesDashHeader"
interface typeParm {
    paramn: String
}

const DashHeader = ({paramn}:typeParm) => {
    return (
      <Header>
          <section>
            <h2>{paramn}</h2>
            <div></div>
          </section>
      </Header>
    )   
  }

export default DashHeader