document.addEventListener("DOMContentLoaded", function () {

    listar();
    alter();
    delet();


});

function listar() {

    document.getElementById("reserve-table").addEventListener("submit", function (e) {
        e.preventDefault();

        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var name = document.getElementById("name").value;
        var people = document.getElementById("people").value;
        var parking = document.getElementById("parking").value;

        let reservations = [];

        if (localStorage.hasOwnProperty("reservations")) {
            reservations = JSON.parse(localStorage.getItem("reservations"));
        }

        reservations.push({ date, time, name, people, parking });

        localStorage.setItem("reservations", JSON.stringify(reservations));

        updateReservationList(reservations);

        // Limpar os campos do formulário após adicionar a reserva
        document.getElementById("reserve-table").reset();

        // Mostrar os botões Alterar e Excluir
        document.querySelectorAll(".button").forEach(function (button) {
            button.style.display = "block";
        });
    });

    function updateReservationList(reservations) {
        var reservationList = document.getElementById("reservation-list");
        reservationList.innerHTML = "";

        reservations.forEach(function (reservation) {
            var listItem = document.createElement("li");
            listItem.classList.add("reservation-item");
            listItem.innerHTML = `
                <span class="date">Data: ${reservation.date}</span>
                <span class="time">Horario: ${reservation.time}</span>
                <span class="name">Nome: ${reservation.name}</span>
                <span class="people">Mesa para: ${reservation.people}</span>
                <span class="parking">Vaga de estacionamento: ${reservation.parking}</span>
                <div class="button">
                    <button class="alter">Alterar</button>
                    <button class="delete">Excluir</button>
                </div>
            `;

            reservationList.appendChild(listItem);
        });
    }


    function updateReservationList(reservations) {
        var reservationList = document.getElementById("reservation-list");
        reservationList.innerHTML = "";

        reservations.forEach(function (reservation) {
            var listItem = document.createElement("li");
            listItem.classList.add("reservation-item");
            listItem.innerHTML = `
                <span class="date">Data: ${reservation.date}</span>
                <span class="time">Horario: ${reservation.time}</span>
                <span class="name">Nome: ${reservation.name}</span>
                <span class="people">Mesa para: ${reservation.people}</span>
                <span class="parking">Vaga de estacionamento: ${reservation.parking}</span>
                <div class="button">
                    <button class="alter">Alterar</button>
                    <button class="delete">Excluir</button>
                </div>
            `;

            reservationList.appendChild(listItem);
        });
    }
}

function alter() {

    document.getElementById("reservation-list").addEventListener("click", function (e) {
        if (e.target.classList.contains("alter")) {
            // Encontrar o elemento pai .reservation-item
            var selectedReservation = e.target.closest(".reservation-item");

            // Preencher o formulário com os dados da reserva selecionada
            document.getElementById("date").value = selectedReservation.querySelector(".date").textContent.split(': ')[1];
            document.getElementById("time").value = selectedReservation.querySelector(".time").textContent.split(': ')[1];
            document.getElementById("name").value = selectedReservation.querySelector(".name").textContent.split(': ')[1];
            document.getElementById("people").value = selectedReservation.querySelector(".people").textContent.split(': ')[1];
            document.getElementById("parking").value = selectedReservation.querySelector(".parking").textContent.split(': ')[1];

            // Remover a reserva antiga do array
            var reservations = JSON.parse(localStorage.getItem("reservations"));
            var index = Array.from(selectedReservation.parentNode.children).indexOf(selectedReservation);
            reservations.splice(index, 1);

            // Salvar as alterações no localStorage
            localStorage.setItem("reservations", JSON.stringify(reservations));

            // Remover a reserva antiga do DOM
            selectedReservation.remove();
        }
    });

}

function delet() {

    document.getElementById("reservation-list").addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            console.log("Botão Excluir pressionado");

            // Encontrar o elemento pai .reservation-item
            var selectedReservation = e.target.closest(".reservation-item");

            // Remover a reserva do array
            var reservations = JSON.parse(localStorage.getItem("reservations"));
            var index = Array.from(selectedReservation.parentNode.children).indexOf(selectedReservation);
            reservations.splice(index, 1);

            // Salvar as alterações no localStorage
            localStorage.setItem("reservations", JSON.stringify(reservations));

            // Remover a reserva do DOM
            selectedReservation.remove();
        }
    });
}



