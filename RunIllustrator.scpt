on run argv
    tell application "Adobe Illustrator"
		activate
	end tell
	tell application "Adobe Illustrator"
        set js to "#include '~/CopyToTemplateRandomOsa.jsx';" & return
        set js to js & "main(arguments);" & return
        do javascript js with arguments argv
    end tell
end run