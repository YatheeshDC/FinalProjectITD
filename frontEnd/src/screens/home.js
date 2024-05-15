import BasicExample from "../components/navbar";
import Nav2 from "../components/navbar2";
import Searchbar from "../components/searchbar";
import Insider from "../components/inside";
import Property from "../components/properties";
import MediaCard from "../components/services";
import RecipeReviewCard from "../components/experts";
import BasicCard from "../components/advice";
import ColumnsGrid from "../components/realeastate";
import OutlinedCard from "../components/agents";
import Exclusive from "../components/exclusive";
// import Arrrowaction from "../components/arrowActionextra";
import Property22 from "../components/properties22";
// import YourProperty from "../components/yourProp";
import FooterSecond from "../components/secondFooter";
// import PropertyServices from "../components/prpertyServicesextra";
import ListProduct from "../components/backfetch";

const Home=()=>{
    return(
        <div>
            <BasicExample/>
            <Nav2/>
            <Searchbar/>
            <Insider/>
            <Property/>
            <ListProduct/>
            {/* <PropertyServices/> */}
            <OutlinedCard/>
            <MediaCard/>
            <RecipeReviewCard/>
            <BasicCard/>
            <Exclusive/>
            <ColumnsGrid/>
            <Property22/>
            {/* <YourProperty/> */}
            <FooterSecond/>

        </div>
    )
}
export default Home;