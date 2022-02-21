<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `<strong>${status}:</strong> ${error.message}`
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