import SlidingPane from 'react-sliding-pane';

import React, { useState } from 'react'

export default function InfoPane(props) {
    const [isOpen, setIsOpen] = useState(props);

    return (
        isOpen ? 
            <SlidingPane
                isOpen={props}
                title="Pane title"
                onRequestClose={() => {
                    setIsOpen(false);
                }}
            >
                <div>Pane content</div>
            </SlidingPane> :
            <> The not pane </>
    )
}
