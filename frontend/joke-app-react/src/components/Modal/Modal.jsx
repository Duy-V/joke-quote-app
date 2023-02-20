import React from "react";

function Modal({ onClick, modal }) {
  return (
    <div class={modal} tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">A pitty message</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>That's all the jokes for today! Come back another day!</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClick}
            >
              Clear cookie and refresh page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
