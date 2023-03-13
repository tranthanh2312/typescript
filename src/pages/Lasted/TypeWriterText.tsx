import React, { useRef, useEffect } from "react";

interface Props {
    data: string[];
}

export const Typewriter = ({ data }: Props) => {
    const aText: string[] = data;
    console.log(aText);
    const iSpeed: number = 50; // Chinh thoi gian
    let iIndex: number = 0;
    let iArrLength: number = aText[0].length;
    const iScrollAt: number = 20;
    let iTextPos: number = 0;
    let sContents: string = "";
    let iRow: number;

    const textElement = useRef<HTMLDivElement>(null);
    const timeoutId = useRef<NodeJS.Timeout>();

    const typewriter = () => {
        sContents = " ";
        iRow = Math.max(0, iIndex - iScrollAt);
        const destination = textElement.current;

        while (iRow < iIndex) {
            sContents += aText[iRow++] + "<br />";
        }
        if (destination) {
            destination.innerHTML =
                sContents + aText[iIndex].substring(0, iTextPos) + "_";
        }

        if (iTextPos++ === iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex !== aText.length) {
                iArrLength = aText[iIndex].length;
                timeoutId.current = setTimeout(typewriter, 500);
            }
        } else {
            timeoutId.current = setTimeout(typewriter, iSpeed);
        }
    };

    useEffect(() => {
        typewriter();
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return <div ref={textElement} />;
};