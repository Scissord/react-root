/***
 *
 *  ICON
 *  Render an icon from feather icons
 *
 *  PROPS
 *  icon: "loader", trash
 *  size: icon pack to use, default is feathericons
 *  className: image to use (see: https://feathericons.com)
 *  color: inject a parent class object
 *
 **********/

// icon={'loader'}
// size={18}
// className={'animate-spin'}
// color="gray"

import FeatherIcon from "feather-icons-react"
import { IIcon } from "@interfaces"
import { FC } from "react"

export const Icon: FC<IIcon> = (props) => {
  return (
    <FeatherIcon
      icon={props.icon}
      size={props.size || 16}
      className={props.className}
      fill={props.color}
      strokeWidth={props.strokeWidth}
    />
  )
}
