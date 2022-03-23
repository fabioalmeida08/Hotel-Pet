import Baloon from "../../assets/svg/Baloon.svg"
import BaloonDesktop from "../../assets/svg/BaloonDesktop.svg"
import Beach from "../../assets/svg/Beach.svg"
import BeachDesktop from "../../assets/svg/BeachDesktop.svg"
import Healty from "../../assets/svg/Healty.svg"
import HealtyDesktop from "../../assets/svg/HealtyDesktop.svg"
import { DivWrapper, DivOrganizer } from "./styles"
import { useState } from "react"

interface propType {
    paragraph: string
    label: string
    svg: string
    background?: boolean
    invert?: boolean
}
const HomeInfo = ({ svg, label, paragraph, background, invert }: propType) => {
    const [isMobile, setMobile] = useState(false)

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            setMobile(false)
        }
        else {
            setMobile(true)
        }
    });

    const selectBackGround = () => {

        switch (svg) {
            case "Baloon": return isMobile ? Baloon : BaloonDesktop
            case "Beach": return isMobile ? Beach : BeachDesktop
            case "Healty": return isMobile ? Healty : HealtyDesktop
            default: return ""
        }
    }

    const lastWordColor = () => {

        const separateWords = label.split(" ")
        const lastWord = separateWords[separateWords.length - 1]
        separateWords.pop()

        return lastWord

    }

    const Words = () => {

        const separateWords = label.split(" ")
        separateWords.pop()
        const transFormInString = separateWords.join(" ")

        return transFormInString
    }

    return (

        <DivWrapper invert={invert} background={background}>
            <DivOrganizer>
                <h1>{Words()} <strong>{lastWordColor()}</strong></h1>
                <p>{paragraph}</p>
            </DivOrganizer>
            <img src={selectBackGround()} alt={svg} />
        </DivWrapper>

    )
}
export default HomeInfo