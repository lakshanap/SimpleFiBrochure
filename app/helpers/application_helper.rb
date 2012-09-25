module ApplicationHelper

	def full_title(description)
		commonTitle = "SimpleFi"
		if description.nil?
			return commonTitle
		else
			return "#{commonTitle} | #{description}"
		end
	end
end
