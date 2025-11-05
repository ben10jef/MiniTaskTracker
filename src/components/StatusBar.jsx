import React from 'react'

export default function StatusBar({counts, statusFilter, setStatusFilter}) {
    return (
        <div className="statusbar">
            <div className="statusbar-inner">
                <button
                    onClick={() => setStatusFilter('All')}
                    className={"btn btn-xs " + (statusFilter === 'All' ? 'btn-primary' : 'btn-ghost')}
                >
                    All ({counts.all})
                </button>
                <button
                    onClick={() => setStatusFilter('Active')}
                    className={"btn btn-xs " + (statusFilter === 'Active' ? 'btn-primary' : 'btn-ghost')}
                >
                    Active ({counts.active})
                </button>
                <button
                    onClick={() => setStatusFilter('Done')}
                    className={"btn btn-xs " + (statusFilter === 'Done' ? 'btn-primary' : 'btn-ghost')}
                >
                    Done ({counts.done})
                </button>
                {/*<span className="badge badge-red"> active</span>*/}
                {/*<span className="badge badge-green"> done</span>*/}

                <div style={{marginLeft: 'auto', display: 'flex', gap: 8}}>

                </div>
            </div>
        </div>
    )
}
