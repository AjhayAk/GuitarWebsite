import React, { Component } from 'react'
import "../App.css"
import ReactPlayer from 'react-player'
class Guitartfahome extends Component {
  render () {
    return (
      <div class="col-">
		<p><br></br><h1><center><b>HOW WELL DO YOU KNOW GUITAR</b></center></h1> <br></br><br></br></p>
<h4><p><h2>The Guitar</h2>....is a fretted musical instrument that typically has six strings. It is held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier.

 <br></br><br></br> The guitar is classified as a chordophone – meaning the sound is produced by a vibrating string stretched between two fixed points. Historically, a guitar was constructed from wood with its strings made of catgut.</p></h4>
<center><img src="images/sampleguitar2.jpg"></img></center>
<center><h2><b><br></br><br></br><b>PARTS</b><br></br><br></br></b></h2></center>
<center><img src="images/partsofguitars.jpg" height="500" width="900"></img></center>
<br></br>
<br></br>
<p><h2><b><center>TYPES</center></b></h2></p>
<br></br>
<p><h2><b><center>Acoustic, Classical, Electric, Electric-Acoustic, Twelve - String, Bass, Electric-Acoustic, Resonator, Archtop, Semi Hollow Electric, Multi Neck, Electric-Acoustic, PocketHarp</center></b></h2></p>
 <center><ReactPlayer
            width = '600px'
            height= '250px'
            controls 
            url = 'https://youtu.be/y5MfVlnbVdQ'
            onReady={() => console.log('onReady callback')}
            onStart={() => console.log('onStart callback')}
            onPause={() => console.log('onPause callback')}
            onEnded={() => console.log('onEnded callback')}
            onError={() => console.log('onError callback')}
        />
</center>
	  </div>
    )
  };
}
export default Guitartfahome