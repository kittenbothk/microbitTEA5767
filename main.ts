/*
KittenbotHK
Microbit powerbrick extension board

MicroPython ESP8266/ESP32 driver for TEA5767 FM radio module:
https://github.com/alankrantas/micropython-TEA5767

TEA5767 Datasheet:
https://www.sparkfun.com/datasheets/Wireless/General/TEA5767.pdf
*/


//% color="#13c2c2" weight=10 icon="\uf0e7"
//% groups='["Ultrasonic/Mic", "Linefollower", "Bumper", "Environment", "Actuator", "Color/Gesture", "Mp3", "RFID", "RGB", "InfraTemp", "Led segment"]'
namespace TEA5767 {
const range_US=[87.5,108.0]
const range_JP=[76.0,91.0]

const addr=0x60
let frequency=88.1
const band='US'
let standby_mode=false
let mute_mode=false
let soft_mute_mode=true
let search_mode=false
let search_direction=1
let search_adc_level=7
let stereo_mode=true
let noise_cancel=true
let high_cut_mode=true
let is_ready=false
let is_stereo=false
let signal_adc_level=0
let buf
//let oaknaso=0

export function init(){
  //oaknaso=0
  update()
}
export function set_frequency(freq: number){
  frequency=freq
  update()
}
export function change_frequency(change: number){
  frequency+=change
  if(change>=0){
    search_direction=1
  } else{
    search_direction=0
  }
  update()
}
export function search(mode: boolean, dir:number, adc:number){
  search_mode=mode
  search_direction=dir
  if(adc==10 || adc==7 || adc==5 || adc==0){
    search_adc_level=adc
  } else{
    search_adc_level=7
  }
  update()
}
export function mute(mode:boolean){
  mute_mode=mode
  update()
}
export function standby(mode:boolean){
  standby_mode=mode
  update()
}
export function read(reg:number){
  pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
          let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
          return val;
}
function update(){

  //oaknaso+=1

}
}
