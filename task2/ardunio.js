
try {
 document.getElementById("connect").addEventListener('click', async () => { //when the user click on connect button the event will start 
    // Filter on devices with the Arduino Uno USB Vendor/Product IDs.
    const filters = [
        { usbVendorId: 0x2341, usbProductId: 0x0043 },
        { usbVendorId: 0x2341, usbProductId: 0x0001 }
      ];
      
      // Prompt user to select an Arduino Uno device.
      const port = await navigator.serial.requestPort({ filters }); //in response to a user gesture such as touch or mouse click
      
      const { usbProductId, usbVendorId } = port.getInfo();
    });
    
}catch (e) { 
    console.log("err", e);
}


