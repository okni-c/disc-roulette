"use client";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function WheelAlbums({ wheelData }: any) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeObj, setPrizeObj] = useState({
    number: 0,
    option: "",
    image: { uri: "" },
  });
  const [open, setOpen] = useState(false);

  const backgroundColors = ["#00"];
  const textColors = ["#0b3351"];
  const outerBorderColor = "#00";
  const outerBorderWidth = 0;
  const innerBorderColor = "#00";
  const innerBorderWidth = 10;
  const innerRadius = 0;
  const radiusLineColor = "#00";
  const radiusLineWidth = 0;
  const fontFamily = "Nunito";
  const fontWeight = "bold";
  const fontSize = 20;
  const fontStyle = "normal";
  const textDistance = 80;
  const spinDuration = 1.0;

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
      setPrizeObj({
        number: newPrizeNumber,
        option: wheelData[newPrizeNumber].option,
        image: { uri: wheelData[newPrizeNumber].image.uri },
      });
      setMustSpin(true);
    }
  };

  return (
    <div className="px-10 w-full">
      <h1 className="text-2xl font-bold">Random Album Roulette</h1>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeObj.number}
        data={wheelData}
        backgroundColors={backgroundColors}
        textColors={textColors}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        spinDuration={spinDuration}
        textDistance={textDistance}
        onStopSpinning={() => {
          setMustSpin(false);
          setOpen(true);
        }}
      />
      <Button onClick={handleSpinClick}>SPIN</Button>

      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{prizeObj.option}</DialogTitle>
            <DialogDescription>
              <img src={prizeObj.image.uri} />
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" onClick={() => setOpen(false)}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
