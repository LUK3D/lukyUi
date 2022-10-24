import { ReactNode } from "react"

export interface ILukyNavbar{
    menus:Array<ILukMenuItme>,
    bottomIcons?:Array<ReactNode>,
    leading?:ReactNode
}

export interface ILukMenuItme{
    index:number,
    label:string,
    link?:string,
    icon:ReactNode
    tooltip?:ReactNode,
    /**🚀 Have the current menu object as an argument */
    onClick?:Function
}