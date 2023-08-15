

class ViewerTrackInformation
{
	constructor(window, viewer, data)
	{
		this.window = window
		this.viewer = viewer
		this.data = data
	}
	
	
	setData(data)
	{
		this.data = data
		this.refresh()
	}
	
	
	destroy()
	{
		
	}
	
	
	refreshPanels()
	{
		let panel = this.window.addPanel("Track Info", false, (open) => { if (open) this.viewer.setSubviewer(this) })
		this.panel = panel
		
		panel.addSpacer(null)
		
		let trackModeOptions =
		[
			{ str: "Race", value: false },
			{ str: "Battle", value: true }
		]
		panel.addSelectionDropdown(null, "Course Type", this.viewer.cfg.isBattleTrack, trackModeOptions, true, false, (x) => { this.window.setNotSaved(); this.viewer.cfg.isBattleTrack = x; this.viewer.refreshPanels() })
		
		panel.addSelectionNumericInput(null, "Lap Count", 1, 9, this.data.trackInfo.lapCount, 1.0, 1.0, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.lapCount = x })

		const convertFloat32MSB2 = (x) =>
		{
			let view = new DataView(new ArrayBuffer(4))
			view.setFloat32(0, x)
			view.setUint8(2, 0)
			view.setUint8(3, 0)

			return view.getFloat32(0)
		}
		panel.addSelectionNumericInput(null, "Speed Mod.", 0, 99999, this.data.trackInfo.speedMod, null, 0.1, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.speedMod = convertFloat32MSB2(x) }, convertFloat32MSB2)

		let flareGroup = panel.addGroup(null, "Lens Flare:")
	
		panel.addSelectionNumericInput(flareGroup, "Red", 0, 255, this.data.trackInfo.flareColor[0], 1.0, 1.0, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.flareColor[0] = x })
		panel.addSelectionNumericInput(flareGroup, "Green", 0, 255, this.data.trackInfo.flareColor[1], 1.0, 1.0, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.flareColor[1] = x })
		panel.addSelectionNumericInput(flareGroup, "Blue", 0, 255, this.data.trackInfo.flareColor[2], 1.0, 1.0, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.flareColor[2] = x })
		panel.addSelectionNumericInput(flareGroup, "Alpha", 0, 255, this.data.trackInfo.flareColor[3], 1.0, 1.0, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.flareColor[3] = x })
		
		let lensFlareOptions =
		[
			{ str: "Disabled", value: 0 },
			{ str: "Enabled", value: 1 }
		]
		panel.addSelectionDropdown(flareGroup, "Flashing", this.data.trackInfo.lensFlareFlash, lensFlareOptions, true, false, (x) => { this.window.setNotSaved(); this.data.trackInfo.lensFlareFlash = x; this.refreshPanels() })
	}
	
	
	refresh()
	{
		this.refreshPanels()
	}
	
	
	onKeyDown(ev)
	{
		
	}
	
	
	onMouseDown(ev, x, y, cameraPos, ray, hit, distToHit, mouse3DPos)
	{
		
	}
	
	
	onMouseMove(ev, x, y, cameraPos, ray, hit, distToHit)
	{
		
	}
	
	
	onMouseUp(ev, x, y)
	{
		
	}
	
	
	drawAfterModel()
	{
		
	}
}


if (module)
	module.exports = { ViewerTrackInformation }