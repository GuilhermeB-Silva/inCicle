import { Birthday } from "./Birthday/Index"
import { Pending } from "./Pending/Index"

export function RightSideBar(){


    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <Birthday/>
            <Pending/>
        </div>

    )
}