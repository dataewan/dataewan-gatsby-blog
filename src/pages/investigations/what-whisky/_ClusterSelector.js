import React from 'react'
import { map } from 'd3-collection'

import Constants from '../../../components/constants.js'

class ClusterSelector extends React.Component {
  render() {
    const { whisky, selectedcluster } = this.props
    const clusters = map(whisky, d => d.cluster).keys().sort()
    const labels = [this.props.allstring].concat(clusters)
    const buttons = labels.map((d, i) => {
      const fill = selectedcluster === d ? Constants.lightred : Constants.darkred
      return(
        <button
          key={`button${i}`}
          css={{
            width: (100 / labels.length) + '%',
            padding: 0,
            fontSize: 12,
            backgroundColor: fill,
          }}
          onClick={e => this.props.onUpdate(d)}
        >
          {d}
        </button>
      )
    })
    return (
      <div
        css={{
          width: Constants.leftwidth
        }}
      >
        {buttons}
      </div>
    );
  }
}

export default ClusterSelector
