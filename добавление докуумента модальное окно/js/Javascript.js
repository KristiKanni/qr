function rm() {
  $(event.target).closest("tr").remove();
}

function add() {
 $("table>tbody").append(`<tr>
		<td>Загрузить файл</td>
		<td>
			<div class='custom-file'>
				<label class='custom-file-label' for='inputGroupFile02'>Выберите файл</label>
				<input type='file' class='custom-file-input' id='inputGroupFile02' aria-describedby='inputGroupFileAddon02'>
			</div>
		</td>
		<td>
			<button class='input-group-text' onclick='rm()'>Удалить</button>
		</td>
	</tr>`);}