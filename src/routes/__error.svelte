<script context="module">
    let message;
    export function load({ error, status }) {
        switch(status){
            case 500: message = 'Connection to Server Error'
            break;
            case 404: message = 'Page not Found'
            break;
            default: message = error.message
            break;
        }
        return {
            props: {
                title: `<strong>${status}:</strong> ${message?? error.message}`
            }
        };
    }
  </script>
  
  <script>
    export let title;
  </script>
  
  <div class="d-flex justify-content-center align-items-center" style="height: 70vh;">
      <h2>{@html title}</h2>
  </div>