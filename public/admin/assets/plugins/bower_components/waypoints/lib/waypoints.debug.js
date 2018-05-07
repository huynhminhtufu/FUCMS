/*!
Waypoints Debug - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
  

  const displayNoneMessage = [
    'You have a Waypoint element with display none. For more information on ',
    'why this is a bad idea read ',
    'http://imakewebthings.com/waypoints/guides/debugging/#display-none'
  ].join('')
  const fixedMessage = [
    'You have a Waypoint element with fixed positioning. For more ',
    'information on why this is a bad idea read ',
    'http://imakewebthings.com/waypoints/guides/debugging/#fixed-position'
  ].join('')

  function checkWaypointStyles() {
    const originalRefresh = window.Waypoint.Context.prototype.refresh

    window.Waypoint.Context.prototype.refresh = function() {
      for (const axis in this.waypoints) {
        for (const key in this.waypoints[axis]) {
          const waypoint = this.waypoints[axis][key]
          const style = window.getComputedStyle(waypoint.element)
          if (!waypoint.enabled) {
            continue
          }
          if (style && style.display === 'none') {
            console.error(displayNoneMessage)
          }
          if (style && style.position === 'fixed') {
            console.error(fixedMessage)
          }
        }
      }
      return originalRefresh.call(this)
    }
  }

  checkWaypointStyles()
}())
;