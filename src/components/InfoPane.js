import React, { useState }from 'react'
import SlidingPane from 'react-sliding-pane';

export default function InfoPane({ isOpen }) {
const [paneOpen, setPaneOpen] = useState(isOpen);

    return (
        <div>
            <button onClick={() => setPaneOpen(true)}>
                Click me to open right pane!
            </button>
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={paneOpen}
                title="Hey, it is optional pane title.  I can be React component too."
                subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setPaneOpen(false);
                }}
            >
                <div>And I am pane content.</div>
            </SlidingPane>
        </div>
    );
}
