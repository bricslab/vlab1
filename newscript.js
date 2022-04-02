and_ibframe =  `
<div class="d-flex gap-4">
                    <span><strong>Fault at A: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa0" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa1" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_N" name="F_A" checked
                            onclick="fault_change(this)">
                        <label for="F_A_N">No fault<label>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <span><strong>Fault at B: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_Sa0" name="F_B"
                            onclick="fault_change(this)">
                        <label for="F_B_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_Sa1" name="F_B"
                            onclick="fault_change(this)">
                        <label for="F_B_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_N" name="F_B"
                            onclick="fault_change(this)" checked>
                        <label for="F_B_N">No fault<label>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <span><strong>Fault at Z: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa0" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa1" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_N" name="F_Z"
                            onclick="fault_change(this)" checked>
                        <label for="F_Z_N">No fault<label>
                    </div>
                
                </div>
                <span class="space-50"></span>
                <div class="d-flex">
                    <div class="d-flex flex-column me-2">
                        <div class="form-check form-switch" style="margin-top: 95px">
                            <input autocomplete="off" class="form-check-input" type="checkbox" id="A"
                                onchange="toggle_switch(this)">
                            <label for="A" id="A_Label">A: 0</label>
                        </div>
    
                        <div class="form-check form-switch" style="margin-top: 30px">
                            <input autocomplete="off" class="form-check-input" type="checkbox" id="B"
                                onchange="toggle_switch(this)">
                            <label for="B" id="B_Label">B: 0</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span>Fault line A</span>
                        <button id="AF" class="vertical-wire" style="background-color: grey;"></button>
                        <div class="d-flex">
                            <button id="ABF" class="horizontal-wire"></button>
                            <button id="AAF" class="horizontal-wire"></button>
                        </div>
                        <span class="space-50"></span>
                        <div class="d-flex">
                            <button id="BBF" class="horizontal-wire"></button>
                            <button id="BAF" class="horizontal-wire"></button>
                        </div>
    
                        <button id="BF" class="vertical-wire" style="background-color: grey;"></button>
                        <span>Fault line B</span>
                    </div>
                    <img src="assets/images/and-gate.png" style="margin-top: 90px; height: 100px">
                    <div class=" d-flex flex-column" style="margin-top: 135px">
                        <div class="d-flex">
                            <button id="ZBF" class="horizontal-wire" style="background-color: blue;"></button>
                            <button id="ZAF" class="horizontal-wire" style="background-color: blue;"></button>
                        </div>
                        <button class="vertical-wire" id="ZF" style="background-color: grey;"></button>
                        <span>Fault line Z</span>
                    </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-center"><button class="btn btn-primary" onclick="do_work()">Run</button>
`

or_ibframe = `
<div class="d-flex gap-4">
                    <span><strong>Fault at A: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa0" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa1" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_N" name="F_A" checked
                            onclick="fault_change(this)">
                        <label for="F_A_N">No fault<label>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <span><strong>Fault at B: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_Sa0" name="F_B"
                            onclick="fault_change(this)">
                        <label for="F_B_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_Sa1" name="F_B"
                            onclick="fault_change(this)">
                        <label for="F_B_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_B_N" name="F_B"
                            onclick="fault_change(this)" checked>
                        <label for="F_B_N">No fault<label>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <span><strong>Fault at Z: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa0" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa1" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_N" name="F_Z"
                            onclick="fault_change(this)" checked>
                        <label for="F_Z_N">No fault<label>
                    </div>
                </div>
                <span class="space-50"></span>
                <div class="d-flex">
                    <div class="d-flex flex-column me-2">
                        <div class="form-check form-switch" style="margin-top: 95px">
                            <input autocomplete="off" class="form-check-input" type="checkbox" id="A"
                                onchange="toggle_switch(this)">
                            <label for="A" id="A_Label">A: 0</label>
                        </div>
    
                        <div class="form-check form-switch" style="margin-top: 30px">
                            <input autocomplete="off" class="form-check-input" type="checkbox" id="B"
                                onchange="toggle_switch(this)">
                            <label for="B" id="B_Label">B: 0</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span>Fault line A</span>
                        <button id="AF" class="vertical-wire" style="background-color: grey;"></button>
                        <div class="d-flex">
                            <button id="ABF" class="horizontal-wire"></button>
                            <button id="AAF" class="horizontal-wire"></button>
                        </div>
                        <span class="space-50"></span>
                        <div class="d-flex">
                            <button id="BBF" class="horizontal-wire"></button>
                            <button id="BAF" class="horizontal-wire"></button>
                        </div>
    
                        <button id="BF" class="vertical-wire" style="background-color: grey;"></button>
                        <span>Fault line B</span>
                    </div>
                    <img src="assets/images/or-gate.png" style="margin-top: 90px; height: 100px">
                    <div class=" d-flex flex-column" style="margin-top: 135px">
                        <div class="d-flex">
                            <button id="ZBF" class="horizontal-wire" style="background-color: blue;"></button>
                            <button id="ZAF" class="horizontal-wire" style="background-color: blue;"></button>
                        </div>
                        <button class="vertical-wire" id="ZF" style="background-color: grey;"></button>
                        <span>Fault line Z</span>
                    </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-center"><button class="btn btn-primary" onclick="do_work()">Run</button>
`

not_ibframe = `
<div class="d-flex gap-4">
                    <span><strong>Fault at A: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa0" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_Sa1" name="F_A"
                            onclick="fault_change(this)">
                        <label for="F_A_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_A_N" name="F_A" checked
                            onclick="fault_change(this)">
                        <label for="F_A_N">No fault<label>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <span><strong>Fault at Z: </strong></span>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa0" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa0">Sa0<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_Sa1" name="F_Z"
                            onclick="fault_change(this)">
                        <label for="F_Z_Sa1">Sa1<label>
                    </div>
                    <div><input autocomplete="off" type="radio" class="form-check-input" id="F_Z_N" name="F_Z"
                            onclick="fault_change(this)" checked>
                        <label for="F_Z_N">No fault<label>
                    </div>
                </div>
                <span class="space-50"></span>
                <div class="d-flex">
                    <div class="d-flex flex-column me-2">
                        <div class="form-check form-switch" style="margin-top: 125px">
                            <input autocomplete="off" class="form-check-input" type="checkbox" id="A"
                                onchange="toggle_switch(this)">
                            <label for="A" id="A_Label">A: 0</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="margin-top:30px">
                        <span>Fault line A</span>
                        <button id="AF" class="vertical-wire" style="background-color: grey;"></button>
                        <div class="d-flex">
                            <button id="ABF" class="horizontal-wire"></button>
                            <button id="AAF" class="horizontal-wire"></button>
                        </div>
                    </div>
                    <img src="assets/images/not-gate.png" style="margin-top: 90px; height: 100px">
                    <div class=" d-flex flex-column" style="margin-top: 135px">
                        <div class="d-flex">
                            <button id="ZBF" class="horizontal-wire" style="background-color: blue;"></button>
                            <button id="ZAF" class="horizontal-wire" style="background-color: blue;"></button>
                        </div>
                        <button class="vertical-wire" id="ZF" style="background-color: grey;"></button>
                        <span>Fault line Z</span>
                    </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-center"><button class="btn btn-primary" onclick="do_work()">Run</button>
`
function gate_radio_click(e) {
    d = document.getElementById('ibframe')
    if (e.id == 'GAND')
        d.innerHTML = and_ibframe
    else if (e.id == 'GOR')
        d.innerHTML = or_ibframe
    else
    d.innerHTML = not_ibframe
}
function toggle_switch(e) {
    document.getElementById(e.id + '_Label').textContent = e.id + ': ' + (e.checked ? '1' : '0')
    document.getElementById(e.id + 'BF').style.backgroundColor = get_color(e.checked)
    if (e.id != 'Z' && document.getElementById('F_' + e.id + '_N').checked)
        document.getElementById(e.id + 'AF').style.backgroundColor = get_color(e.checked)
}

function setup() {
    document.getElementById('ibframe').innerHTML = and_ibframe
}

function fault_change(e) {
    x = e.id.substring(4)
    y = e.id.substring(2)[0]
    console.log(y + 'F1')
    z = (x == 'Sa0') ? 'black' : ((x == 'Sa1') ? 'green' : 'grey');
    document.getElementById(y + 'F').style.backgroundColor = z
    if (y != 'Z') {
        p = get_color(document.getElementById(y).checked)
        document.getElementById(y + 'AF').style.background = (z == 'grey') ? p : z
    }
}

function get_color(b) {
    return b ? 'green' : 'black'
}


function do_work() {
    gate = "GAND"
    for (const x of document.getElementsByName('G'))
        if (x.checked) {
            gate = x.id
            break
        }
    if (gate == "GAND" || gate == "GOR") {
        abf = document.getElementById('A').checked ? 1 : 0
        bbf = document.getElementById('B').checked ? 1 : 0
        aaf = document.getElementById('F_A_Sa0').checked ? 0 : (document.getElementById('F_A_Sa1').checked ? 1 : abf)
        baf = document.getElementById('F_B_Sa0').checked ? 0 : (document.getElementById('F_B_Sa1').checked ? 1 : bbf)
        ez = aaf & baf
        if (gate == 'GOR')
            ez = aaf | baf
        document.getElementById('ZBF').style.backgroundColor = get_color(ez)
        z = ez
        az = abf & bbf
        if (gate == 'GOR')
            az = abf | bbf
        if (document.getElementById('F_Z_Sa0').checked)
            z = 0
        else if (document.getElementById('F_Z_Sa1').checked)
            z = 1
        document.getElementById('ZAF').style.backgroundColor = get_color(z)
        x = document.getElementById('table')
        x.innerHTML += `<tr class="d-flex">
                    <th class="col-4">${gate.substring(1)}</th>
                    <th class="col-4">${abf}</th>
                    <th class="col-5">${bbf}</th>
                    <th class="col-5">${az}</th>
                    <th class="col-5 ${(az == z) ? "bg-success" : "bg-danger"}">${z}</th>
                </tr> `
    }
    else {
        abf = document.getElementById('A').checked ? 1 : 0
        aaf = document.getElementById('F_A_Sa0').checked ? 0 : (document.getElementById('F_A_Sa1').checked ? 1 : abf)
        ez = 1 - aaf
        document.getElementById('ZBF').style.backgroundColor = get_color(ez)
        z = ez
        az = 1 - abf
        if (document.getElementById('F_Z_Sa0').checked)
            z = 0
        else if (document.getElementById('F_Z_Sa1').checked)
            z = 1
            document.getElementById('ZAF').style.backgroundColor = get_color(z)
            x = document.getElementById('table')
            x.innerHTML += `<tr class="d-flex">
                        <th class="col-4">NOT</th>
                        <th class="col-4">${abf}</th>
                        <th class="col-5">X</th>
                        <th class="col-5">${az}</th>
                        <th class="col-5 ${(az == z) ? "bg-success" : "bg-danger"}">${z}</th>
                    </tr> `
    }
}