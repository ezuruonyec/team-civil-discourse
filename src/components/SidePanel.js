import React, { useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel';

export default function SidePanel() {
    const [openPanel, setOpenPanel] = useState(true);    

    return (
        <div>
            <div>
                <button onClick={() => setOpenPanel(true)}>Open</button>
            </div>
            <SlidingPanel
                type={'left'}
                isOpen={openPanel}
                size={30}
            >
                <div>
                <div>My Panel Content</div>
                <button onClick={() => setOpenPanel(false)}>Close</button>
                </div>
            </SlidingPanel>            
        </div>
    )
}
