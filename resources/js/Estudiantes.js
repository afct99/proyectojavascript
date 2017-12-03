    var Estudiante = function(){
        var self = this;
        self.id="";
        self.nombre="";
        self.matricula="";
        self.identificacion="";
        self.telefono="";
        self.email="";
    };
    function imprimir(){
            var id = document.getElementById("id").value;
            var nombre = document.getElementById("nombre").value;
            var matricula = document.getElementById("matricula").value;
            var identificacion = document.getElementById("identificacion").value;
            var telefono = document.getElementById("telefono").value;
            var email = document.getElementById("email").value;
            var est1=new Estudiante();
            est1.id=id;
            est1.nombre=nombre;
            est1.matricula=matricula;
            est1.identificacion=identificacion;
            est1.telefono=telefono;
            est1.email=email;
            console.log(est1);
            addRow(est1);

        };
        function addRow(est){
            var id = document.getElementById("id").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdid = document.createElement("td");    
            var txtid = document.createTextNode(est.id);

            var nombre = document.getElementById("nombre").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdnombre = document.createElement("td");    
            var txtnombre = document.createTextNode(est.nombre);

            var matricula = document.getElementById("matricula").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdmatricula = document.createElement("td");    
            var txtmatricula = document.createTextNode(est.matricula);

            var identificacion = document.getElementById("identificacion").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdidentificacion = document.createElement("td");    
            var txtidentificacion = document.createTextNode(est.identificacion);

            var telefono = document.getElementById("telefono").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdtelefono = document.createElement("td");    
            var txttelefonno = document.createTextNode(est.telefono);

            var email = document.getElementById("email").value;
            var table = document.getElementById("estudiantes");
            var tr = document.createElement("tr");
            var tdemail = document.createElement("td");    
            var txtemail = document.createTextNode(est.email);


            tdid.appendChild(txtid);
            tr.appendChild(tdid);
            tdnombre.appendChild(txtnombre);
            tr.appendChild(tdnombre);
            tdmatricula.appendChild(txtmatricula);
            tr.appendChild(tdmatricula);

            tdidentificacion.appendChild(txtidentificacion);
            tr.appendChild(tdidentificacion);

            tdtelefono.appendChild(txttelefonno);
            tr.appendChild(tdtelefono);

            tdemail.appendChild(txtemail);
            tr.appendChild(tdemail);


            table.appendChild(tr);

        };
        function limpiar(){
            document.getElementById("id").value="";
            document.getElementById("nombre").value="";
            document.getElementById("matricula").value="";
            document.getElementById("identificacion").value="";
            document.getElementById("telefono").value="";
            document.getElementById("email").value="";
        };
        /*var nombre = "Angel Cordero"
        console.log(nombre);
        alert(nombre);
        ciclo(1000);*/