import NounDisplay from "../POS/Noun/NounDisplay";
import VerbDisplay from "../POS/Verb/VerbDisplay";
import AdjectiveDisplay from "../POS/Adjective/AdjectiveDisplay";
import OtherDisplay from "../POS/Other_/OtherDisplay";
import { RefresherContext } from '../EditComponents/RefresherContext.js';
import { useState } from "react";

export default function RememberInfoScreen({ route }) {
    const {data} = route.params;
    const [refresher, setRefresher] = useState(false);
      
    const GenerateWordCardHandler = () => {
        if (data.pos === "V") {
            return(
                <VerbDisplay data={data}/>
            )
        } else if (data.pos === "N") {
            return <NounDisplay data={data} />
        } else if (data.pos === "Adj") {
           return <AdjectiveDisplay data={data} />
        } else if (data.pos === "Other") {
            return <OtherDisplay data={data} />
        }
    }
    

    return (
        <RefresherContext.Provider value={[refresher, setRefresher]}>
            {GenerateWordCardHandler()}
        </RefresherContext.Provider>
    )
};

