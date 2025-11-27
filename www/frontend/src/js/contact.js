      document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert(
            "Vielen Dank für Ihre Nachricht! 🌿 Ich werde mich zeitnah bei Ihnen melden."
          );
          this.reset();
        });