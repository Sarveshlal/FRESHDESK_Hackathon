var API_KEY = 'noV59xt77G5BXAYxP1y';
var FD_ENDPOINT = "newaccount1611041233519";

// var PATH = "/api/v2/tickets";
// var url = "https://" + FD_ENDPOINT + ".freshdesk.com" + PATH;


function getdata() {
    var PATH = "/api/v2/tickets";
    var url = "https://" + FD_ENDPOINT + ".freshdesk.com" + PATH;
    fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Basic ${window.btoa('noV59xt77G5BXAYxP1y' + ":" + 'x')}`
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            displayall(data)
            function displayall(datas) {
                for (var i = 0; i < datas.length; i++) {
                    var butt = document.getElementById('displayall')
                    var card = document.createElement('div')
                    card.setAttribute("class", 'card')
                    var cardbody = document.createElement('div')
                    cardbody.setAttribute('class', 'card-body')
                    var cardtext = document.createElement('div')
                    cardtext.setAttribute('class', 'card-text')
                    function status() {
                        if (datas[i].status == 2)
                            return "Open"
                        if (datas[i].status == 3)
                            return "Pending"
                        if (datas[i].status == 4)
                            return "Resolved"
                        if (datas[i].status == 5)
                            return "Closed"
                    }
                    function priority() {
                        if (datas[i].priority == 1)
                            return "Low"
                        if (datas[i].priority == 2)
                            return "Medium"
                        if (datas[i].priority == 3)
                            return "High"
                        if (datas[i].priority == 4)
                            return "Urgent"
                    }
                    cardtext.innerHTML = `${datas[i].subject}<span class="badge rounded-pill bg-danger">${datas[i].type}</span><br>Status:${status()} &nbsp priority:${priority()}`
                    cardbody.append(cardtext)
                    card.append(cardbody)
                    butt.append(card)
                }
            }
        })
        .catch((err) => console.log(err))
}

function createdata() {
    var PATH = "/api/v2/tickets";
    var url = "https://" + FD_ENDPOINT + ".freshdesk.com" + PATH;
    fetch(url, {
        method: "POST",
        headers: {
            'content-type':'application/json; charset=UTF-8',
            'Authorization': `Basic ${window.btoa('noV59xt77G5BXAYxP1y' + ":" + 'x')}`
        }
    }).then((resp) => resp.json())
        .then((datas) => {
            console.log(data)
            var d = new Date()
            var word = document.getElementById("status");
            var strUser1 = word.options[word.selectedIndex].value;
            console.log(strUser1)
            var words = document.getElementById("priority");
            var strUser2 = words.options[words.selectedIndex].value;
            console.log(strUser2)
            var wordss = document.getElementById("type");
            var strUser3 = wordss.options[wordss.selectedIndex].value;
            console.log(strUser3)
            function status() {
                if (strUser == Open)
                    return "Open"
                if (datas[i].status == 3)
                    return "Pending"
                if (datas[i].status == 4)
                    return "Resolved"
                if (datas[i].status == 5)
                    return "Closed"
            }
            function priority() {
                if (datas[i].priority == 1)
                    return "Low"
                if (datas[i].priority == 2)
                    return "Medium"
                if (datas[i].priority == 3)
                    return "High"
                if (datas[i].priority == 4)
                    return "Urgent"
            }
            let data = {
                associated_tickets_count: null,
                association_type: null,
                cc_emails: null,
                company_id: null,
                created_at: d,
                custom_fields: {},
                due_by: d,
                email_config_id: null,
                fr_due_by: "2021-01-19T17:00:00Z",
                fr_escalated: true,
                fwd_emails: null,
                group_id: 82000227616,
                id: 7,
                is_escalated: false,
                nr_due_by: null,
                nr_escalated: false,
                priority: strUser2,
                product_id: null,
                reply_cc_emails: null,
                requester_id: 82011056998,
                responder_id: null,
                source: 1,
                spam: false,
                status: strUser1,
                subject: document.getElementsByName('subject').value ,
                tags: [],
                ticket_cc_emails: null,
                to_emails: null,
                type: strUser3,
                updated_at: d,
            }
            datas.push(data)
            console.log(datas)
        })
        .catch((err) => console.log(err))
}

function updatedata() {
    var ticket_id = document.getElementById('ticketid').value
    var wordd = document.getElementById('statusdata').value
    var strUser11 = wordd.options[wordd.selectedIndex].value;
    var wordds = document.getElementsById('prioritydata').value
    var strUser12 = wordds.options[wordds.selectedIndex].value;
    var PATH = "/api/v2/tickets";
    var url = "https://" + FD_ENDPOINT + ".freshdesk.com" + PATH +"/"+ ticket_id;
    
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Basic ${window.btoa('noV59xt77G5BXAYxP1y' + ":" + 'x')}`
        }
    }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            data.status = strUser11
            data.priority = strUser12
        })
        .catch((err) => console.log(err))
}
